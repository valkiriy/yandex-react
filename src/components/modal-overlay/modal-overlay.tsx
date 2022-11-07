import React from "react";
import styles from './modal-overlay.module.css'

interface IModalOverlay {
    onClose: () => void
}

export function ModalOverlay({ onClose }: IModalOverlay) {
    return (
        <div onClick={onClose} className={styles.modal_overlay}></div>
    )
}
