import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import axios from "axios";

const DonationContext = createContext();

const DonationProvider = ({ children, donationCount = 200 }) => {
  const [donationData, setDonationData] = useState(null);
  const localStorageKey = "donationDataCache";

  const gettingDonations = useCallback(
    async (retryCount = 5, delay = 1000) => {
      let attempts = 0;
      while (attempts < retryCount) {
        attempts++;
        try {
          const response = await axios.get(
            `https://fandom-k-api.vercel.app/14-3/donations?pageSize=${donationCount}`,
            {
              headers: { accept: "application/json" },
            }
          );
          const data = response.data.list;
          localStorage.setItem(localStorageKey, JSON.stringify(data));
          console.log("fetch 성공 attempt:", attempts);
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
    [donationCount, localStorageKey]
  );

  useEffect(() => {
    const cachedData = localStorage.getItem(localStorageKey);

    if (cachedData) {
      console.log("로컬스토리지에서 가져옴");
      setDonationData(JSON.parse(cachedData));
      gettingDonations().then((updatedData) => {
        if (updatedData) {
          setDonationData(updatedData);
        }
      });
    } else {
      gettingDonations().then((data) => {
        if (data) {
          setDonationData(data);
        } else {
          console.warn("데이터 안불러와짐");
        }
      });
    }
  }, [donationCount, localStorageKey, gettingDonations]);

  const value = {
    donationData,
    gettingDonations,
  };

  return (
    <DonationContext.Provider value={value}>
      {children}
    </DonationContext.Provider>
  );
};

const useDonationData = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error("provider 없음");
  }
  return context;
};

export { DonationProvider, useDonationData, DonationContext };
