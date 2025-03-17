import instance from "./axiosInstance";

const BASE_URL = "/idols";

// [GET] 아이돌 목록 가져오기
export const fetchIdols = async (pageSize = 150, page = 1) => {
  try {
    // API에 GET 요청 (아이돌 목록 가져오기 : GET /idols?pageSize=20)
    const response = await instance.get(BASE_URL, {
      params: { pageSize, page }, // 페이지 크기를 쿼리 파라미터로 전달
    });

    console.log("아이돌 목록 가져오기 성공:", response.data);

    return response.data.list.map((idol) => ({
      id: idol.id,
      name: idol.name,
      group: idol.group,
      gender: idol.gender,
      profilePicture: idol.profilePicture,
      totalVotes: idol.totalVotes,
    }));
  } catch (error) {
    console.error(
      "아이돌 목록 요청 실패:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [GET] 특정 아이돌 정보 가져오기
export const fetchIdolById = async (idolId) => {
  try {
    // API에 GET 요청 (특정 아이돌 정보 가져오기 : GET /idols/{id})
    const response = await instance.get(`${BASE_URL}/${idolId}`);

    console.log(`아이돌 정보 가져오기 성공 (ID: ${idolId}):`, response.data);

    return response.data;
  } catch (error) {
    console.error(
      `아이돌 정보 요청 실패 (ID: ${idolId}):`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [POST] 새로운 아이돌 추가
export const createIdol = async (idolData) => {
  try {
    // API에 POST 요청 (새로운 아이돌 추가 : POST /idols)
    const response = await instance.post(BASE_URL, idolData);

    console.log("아이돌 추가 성공:", response.data);

    return response.data;
  } catch (error) {
    console.error(
      "아이돌 추가 실패:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [PUT] 기존 아이돌 정보 수정
export const updateIdol = async (idolId, idolData) => {
  try {
    // API에 PUT 요청 (기존 아이돌 정보 수정 : PUT /idols/{id})
    const response = await instance.put(`${BASE_URL}/${idolId}`, idolData);

    console.log(`아이돌 정보 수정 성공 (ID: ${idolId}):`, response.data);

    return response.data;
  } catch (error) {
    console.error(
      `아이돌 정보 수정 실패 (ID: ${idolId}):`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [DELETE] 특정 아이돌 삭제
export const deleteIdol = async (idolId) => {
  try {
    // API에 DELETE 요청 (아이돌 삭제 : DELETE /idols/{id})
    const response = await instance.delete(`${BASE_URL}/${idolId}`);

    console.log(`아이돌 삭제 성공 (ID: ${idolId}):`, response.data);

    return response.data;
  } catch (error) {
    console.error(
      `아이돌 삭제 실패 (ID: ${idolId}):`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
