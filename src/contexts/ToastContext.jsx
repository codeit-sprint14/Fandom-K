import { createContext, useCallback, useContext, useState } from "react";
import Toast from "../components/modals/Toast";

const ToastContext = createContext();

const TOAST_DURATION = 3000;

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const showToast = useCallback(
    (message, type = "success") => {
      if (!toast.visible) {
        setToast({ visible: true, message, type });

        setTimeout(() => {
          setToast((prev) => ({ ...prev, visible: false }));
        }, TOAST_DURATION);
      }
    },
    [toast.visible]
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {toast.visible && <Toast msg={toast.message} />}
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("error");
  }

  return context;
};
