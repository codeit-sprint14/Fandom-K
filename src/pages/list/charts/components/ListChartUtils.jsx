import axios from "axios";

export async function getIdolList(gender) {
  try {
    const response = await axios.get(
      "https://fandom-k-api.vercel.app/14-3/idols?pageSize=200"
    );
    return response.data.list.filter((e) => e.gender === gender);
  } catch (error) {
    console.error("아이돌 차트 데이터를 불러오는 중 오류 발생:", error);
    return [];
  }
}
