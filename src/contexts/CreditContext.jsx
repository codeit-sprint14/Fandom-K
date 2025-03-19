import { createContext, useState, useContext, useEffect } from "react";

const CreditContext = createContext();

const CreditProvider = ({ children }) => {
  const [credit, setCredit] = useState(() => {
    const storedCredit = window.localStorage.getItem("credit");
    return storedCredit !== null ? Number(storedCredit) : 30000;
  });

  useEffect(() => {
    window.localStorage.setItem("credit", credit);
    console.log("Credit updated:", credit);
  }, [credit]);

  const value = {
    credit,
    setCredit,
  };

  return (
    <CreditContext.Provider value={value}>{children}</CreditContext.Provider>
  );
};

const useCredit = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error("Provider 없음");
  }
  return context;
};

export { CreditContext, CreditProvider, useCredit };
