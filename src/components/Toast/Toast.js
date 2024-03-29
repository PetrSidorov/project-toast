import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
// import Icon from "../Icon";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, shown, id }) {
  const { removeToast } = React.useContext(ToastContext);
  Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]} test`}>
      <div className={styles.iconContainer}>
        <VisuallyHidden>{variant} message</VisuallyHidden>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => removeToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
