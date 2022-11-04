import React, {ReactChild} from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'

import {ModalOverlay} from "../modal-overlay/modal-overlay";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot: any = document.getElementById("modal");

interface IModal {
    children: ReactChild,
    onClose: () => void
}

export function Modal ({ children, onClose }: IModal) {

    React.useEffect(() => {
        function closeByEscape(evt: KeyboardEvent) {
            if(evt.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }
    }, [])

    return ReactDOM.createPortal((
        <>
            <div className={styles.modal} onKeyDown={onClose} >
                <div className={styles.content} tabIndex={0}>
                    <div className={styles.close} onClick={onClose}><CloseIcon type="primary" /></div>
                    {children}
                </div>
                <ModalOverlay onClose={onClose} />
            </div>
        </>
    ), modalRoot)
}
