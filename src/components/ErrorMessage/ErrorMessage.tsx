import React from "react";
import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
  cancelError: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  cancelError
}) => {
  return (
    <div className={styles.container}>
      <strong>{message}</strong>
      <button type="button" onClick={cancelError}>
        (close)
      </button>
    </div>
  );
};

export default ErrorMessage;
