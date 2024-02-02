import React from "react";
export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const cleraAll = window.addEventListener("keydown", (key) => {
      if (key.code === "Escape") {
        clearToasts();
      }
    });
    return () => removeEventListener(cleraAll);
  }, []);
  function clearToasts() {
    setToasts([]);
  }
  function removeToast(idToRemove) {
    console.log(idToRemove);
    setToasts((toasts) => toasts.filter(({ id }) => idToRemove != id));
  }

  function createToast(variant, message) {
    setToasts((currToasts) => [
      ...currToasts,
      { variant, message, id: crypto.randomUUID() },
    ]);
  }
  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
