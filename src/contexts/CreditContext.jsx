import { createContext, useState, useContext } from "react";

// 1. Context 생성
const CreditContext = createContext();

// 2. Provider 컴포넌트 생성
const CreditProvider = ({ children }) => {
  // ✅ useState 훅으로 credit 상태 관리
  const [credit, setCredit] = useState(() => {
    const storedCredit = window.localStorage.getItem("credit");
    return storedCredit !== null ? Number(storedCredit) : 0;
  });

  // ✅ credit 상태 업데이트 함수 (setCredit) 도 함께 제공
  const value = {
    credit,
    setCredit,
  };

  return (
    // 3. Provider 컴포넌트로 감싸고 value prop 에 공유할 값 설정
    <CreditContext.Provider value={value}>{children}</CreditContext.Provider>
  );
};

// 4. Custom Hook 생성 (useCredit) - 선택 사항이지만 편리함
const useCredit = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error("useCredit must be used within a CreditProvider");
  }
  return context; // { credit, setCredit } 객체 반환
};

export { CreditContext, CreditProvider, useCredit };
