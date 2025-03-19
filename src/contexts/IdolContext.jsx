import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import axios from "axios";

const IdolContext = createContext();

const IdolProvider = ({ children, idolCount = 200 }) => {
  const [idolData, setIdolData] = useState(null);
  const localStorageKey = "idolDataCache";

  const gettingIdols = useCallback(
    async (retryCount = 5, delay = 1000) => {
      let attempts = 0;
      while (attempts < retryCount) {
        attempts++;
        try {
          const response = await axios.get(
            `https://fandom-k-api.vercel.app/14-3/idols?pageSize=${idolCount}`,
            {
              headers: { accept: "application/json" },
            }
          );
          const data = response.data.list;
          localStorage.setItem(localStorageKey, JSON.stringify(data));
          console.log("n번째에 성공: ", attempts);
          return data;
        } catch (error) {
          console.error(`n번째 실패: ${attempts}`, error);
          if (attempts < retryCount) {
            console.log(`재시도 중`);
            await new Promise((resolve) => setTimeout(resolve, delay));
          } else {
            console.error("다 실패함");
            break;
          }
        }
      }
      return null;
    },
    [idolCount, localStorageKey]
  );

  useEffect(() => {
    const cachedData = localStorage.getItem(localStorageKey);

    if (cachedData) {
      console.log("localStorage에서 가져옴");
      setIdolData(JSON.parse(cachedData));
      gettingIdols().then((updatedData) => {
        if (updatedData) {
          setIdolData(updatedData);
        }
      });
    } else {
      gettingIdols().then((data) => {
        if (data) {
          setIdolData(data);
        } else {
          console.warn("데이터 없음");
        }
      });
    }
  }, [idolCount, localStorageKey, gettingIdols]);

  const value = {
    idolData,
    gettingIdols,
  };

  return <IdolContext.Provider value={value}>{children}</IdolContext.Provider>;
};

const useIdolData = () => {
  const context = useContext(IdolContext);
  if (!context) {
    throw new Error("IdolProvider 없음");
  }
  return context;
};
export { IdolProvider, useIdolData, IdolContext };
