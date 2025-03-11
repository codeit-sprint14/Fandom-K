import instance from "./axiosInstance";

const BASE_URL = "/charts";

// [GET] 남자/여자 아이돌 인기 순위 차트 가져오기
export const fetchIdolChart = async (gender, cursor = 0, pageSize = 10) => {
  try {
    // API에 GET 요청 (아이돌 목록 가져오기 : GET /idols?pageSize=20)
    const response = await instance.get(BASE_URL, {
      params: { cursor, pageSize }, // 페이지 크기를 쿼리 파라미터로 전달
    });

    console.log(`아이돌 차트 (${gender}) 가져오기 성공:`, response.data);

    return {
      nextCursor: response.data.nextCursor, // 다음 요청 시 사용할 cursor 값
      idols: response.data.idol.map((idol) => ({
        id: idol.id, // 아이돌 id
        name: idol.name, // 아이돌 이름
        group: idol.group, // 아이돌 그룹명
        profilePicture: idol.profilePicture, // 아이돌 프로필 사진
        totalVotes: idol.totalVotes, // 아이돌 총 투표 수
        rank: idol.rank, // 아이돌 총 투표 수
      })),
    };
  } catch (error) {
    console.error(
      `아이돌 차트 (${gender}) 요청 실패:`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
