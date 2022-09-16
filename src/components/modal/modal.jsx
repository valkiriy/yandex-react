import React from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'

import {ModalOverlay} from "../modal-overlay/modal-overlay";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

export function Modal ({ children, onClose }) {

    React.useEffect(() => {
        function closeByEscape(evt) {
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

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
}

