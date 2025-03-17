import { useState, useEffect } from "react";
import { fetchIdols } from "../../apis/idolApi";
import { getStoredIdols, saveIdolsToStorage } from "../../utils/localStorage";

export function useIdol() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState(getStoredIdols());
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 전체 아이돌 불러오기 (페이지네이션 추가)
  useEffect(() => {
    const loadIdols = async () => {
      try {
        const response = await fetchIdols(150, page);

        if (response.length > 0) {
          const mappedIdols = response.map((idol) => ({
            id: idol.id,
            name: idol.name,
            gender: idol.gender,
            image: idol.profilePicture, // 이미지가 실제로 설정되는지 확인
            group: idol.group,
          }));

          setIdols((prevIdols) => {
            const uniqueIdols = [...prevIdols, ...mappedIdols].filter(
              (idol, index, self) =>
                index === self.findIndex((i) => i.id === idol.id)
            );
            return uniqueIdols;
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("아이돌 목록 불러오기 실패: ", error);
      }
    };

    loadIdols();
  }, [page]);

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

  return {
    idols,
    favoriteIdols,
    setFavoriteIdols,
    addIdol,
    removeIdol,
    setPage,
    hasMore,
  };
}
