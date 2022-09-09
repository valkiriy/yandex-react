import React from "react";
import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

export function ModalOverlay({ onClose }) {
    return (
        <div onClick={onClose} className={styles.modal_overlay}></div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
}
