import React, {FC} from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'

import {ModalOverlay} from "../modal-overlay/modal-overlay";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot: HTMLElement | null  = document.getElementById("modal");

interface IModal {
    onClose: () => void
}

export const Modal: FC<IModal> = ({ children, onClose }) => {

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

    return modalRoot && ReactDOM.createPortal((
        <>
            <div className={styles.modal} onKeyDown={onClose} >
                <div className={styles.content} tabIndex={0}>
                    <div className={styles.close} data-class='modal-close-btn' onClick={onClose}><CloseIcon type="primary" /></div>
                    {children}
                </div>
                <ModalOverlay onClose={onClose} />
            </div>
        </>
    ), modalRoot)
}
