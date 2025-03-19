import { useState, useEffect, useCallback } from "react";
import { getStoredIdols, saveIdolsToStorage } from "../../utils/localStorage";
import { useIdolData } from "../../contexts/IdolContext";

export function useIdol() {
  const [favoriteIdols, setFavoriteIdols] = useState(getStoredIdols());
  const { idolData } = useIdolData();

  useEffect(() => {
    setFavoriteIdols(getStoredIdols());
  }, [localStorage.getItem("favoriteIdols")]);

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
    idols: idolData,
    favoriteIdols,
    setFavoriteIdols,
    addIdol,
    removeIdol,
    isLoading: false,
  };
}