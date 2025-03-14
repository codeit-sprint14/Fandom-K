import { useState, useEffect } from "react";
import { fetchIdols } from "../../apis/idolApi";
import {
  getStoredIdols,
  saveIdolsToStorage,
  removeIdolFromStorage,
} from "../../utils/localStorage";

export function useIdol() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState(getStoredIdols());

  // 전체 아이돌 불러오기 (API 호출)
  useEffect(() => {
    const loadIdols = async () => {
      try {
        const response = await fetchIdols();
        if (response) {
          setIdols(
            response.map((idol) => ({
              id: idol.id,
              name: idol.name,
              gender: idol.gender,
              image: idol.profilePicture,
              group: idol.group,
            }))
          );
        }
      } catch (error) {
        console.error("아이돌 목록 불러오기 실패: ", error);
      }
    };

    loadIdols();
  }, []);

  // LocalStorage 변경 감지 후 상태 업데이트
  useEffect(() => {
    setFavoriteIdols(getStoredIdols());
  }, [localStorage.getItem("favoriteIdols")]);

  // 관심 아이돌 추가 함수
  const addIdol = (idol) => {
    const updated = [...favoriteIdols, idol];
    saveIdolsToStorage(updated);
    setFavoriteIdols(updated);
  };

  const removeIdol = (idolId) => {
    const updatedIdols = favoriteIdols.filter((idol) => idol.id !== idolId);
    setFavoriteIdols(updatedIdols);
    saveIdolsToStorage(updatedIdols);
  };

  return { idols, favoriteIdols, addIdol, removeIdol };
}
