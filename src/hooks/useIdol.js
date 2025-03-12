import { useState, useEffect } from "react";

const STORAGE_KEY = "favoriteIdols"; // localStorage 키 값

export function useIdol() {
  const [favoriteIdols, setFavoriteIdols] = useState([]);

  // localStorage에서 관심 아이돌 불러오기
  useEffect(() => {
    const storedIdols = localStorage.getItem(STORAGE_KEY);
    if (storedIdols) {
      setFavoriteIdols(JSON.parse(storedIdols)); // 문자열을 배열로 변환
    }
  }, []);

  // 관심 아이돌 추가 함수
  const addIdol = (idol) => {
    console.log("➕ 아이돌 추가:", idol);
    if (!favoriteIdols.some((fav) => fav.id === idol.id)) {
      const updatedIdols = [...favoriteIdols, idol];
      setFavoriteIdols(updatedIdols);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIdols));
    }
  };

  // 관심 아이돌 삭제 함수
  const removeIdol = (idolId) => {
    console.log("❌ 아이돌 삭제:", idolId);
    const updatedIdols = favoriteIdols.filter((idol) => idol.id !== idolId);
    setFavoriteIdols(updatedIdols);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIdols)); // localStorage 업데이트
  };

  return { favoriteIdols, addIdol, removeIdol };
}
