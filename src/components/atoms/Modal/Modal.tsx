import { ReactNode } from "react";
import styles from "./modal.module.css"
import closeIcon from "../../../assets/close.png"; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">
          <img src={closeIcon} alt="Cerrar" className={styles.closeIcon} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
