import instance from "./axiosInstance";

const BASE_URL = "/votes";

// [POST] 특정 아이돌에게 투표하기
export const voteIdol = async (idolId) => {
  try {
    // API에 POST 요청 (아이돌 투표 : POST /votes/{idolId})
    const response = await instance.post(`${BASE_URL}/${idolId}`);

    console.log("투표 성공 (아이돌 ID: ${idolId}):", response.data);

    return {
      votedId: response.data.voteId, // 투표 ID
      idol: {
        id: response.data.idol?.id,
        name: response.data.idol?.name,
        group: response.data.idol?.group,
        gender: response.data.idol?.gender,
        profilePicture: response.data.idol?.profilePicture,
        totalVotes: response.data.idol?.totalVotes,
      },
    };
  } catch (error) {
    console.error(
      `투표 실패 (아이돌 ID: ${idolId}):`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
