import React from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import FocusTrap from "focus-trap-react";

import {ModalOverlay} from "../modal-overlay/modal-overlay";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

export class Modal extends React.Component {
    render() {
        const { children, onClose } = this.props;
        return ReactDOM.createPortal((
            <div>
                <FocusTrap>
                    <div className={styles.modal} onKeyDown={onClose} >
                        <div className={styles.content} tabIndex={0}>
                            <div className={styles.close} onClick={onClose}><CloseIcon type="primary" /></div>
                            {children}
                        </div>
                        <ModalOverlay onClose={onClose} />
                    </div>
                </FocusTrap>
            </div>
        ), modalRoot)
    }
}

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
}

