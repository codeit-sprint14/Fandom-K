const LOCAL_STORAGE_KEY = "favoriteIdols";

// localStorage에서 관심 아이돌 가져오기
export const getStoredIdols = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// 관심 아이돌 저장
export const saveIdolsToStorage = (idols) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(idols));
};

// 특정 아이돌 삭제
export const removeIdolFromStorage = (id) => {
  const updateIdols = getStoredIdols().filter((idol) => idol.id !== id);
  saveIdolsToStorage(updatedIdols);
};
