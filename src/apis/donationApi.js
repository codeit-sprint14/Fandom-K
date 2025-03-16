import instance from "./axiosInstance";

const BASE_URL = "/donations";

// 후원 목록 가져오기 (페이지네이션 지원)
// cursor는 몇 번부터 데이터를 갖고올지(기본값: 0), pageSize는 몇 개씩 갖고올지(기본값: 8)
export const fetchDonations = async (cursor = 0, pageSize = 8) => {
  try {
    // API에 GET 요청 (후원 데이터를 갖고오는 요청 : GET  /donations?cursor=0&pageSize=8)
    const response = await instance.get(BASE_URL, {
      params: { cursor, pageSize }, // 요청 시, 시작위치와 한 번에 가져올 개수를 쿼리 파라미터로
    });

    // console.log("후원 목록 가져오기 성공:", response.data);
    // console.log("📌 API 응답 데이터 확인:", response.data);
    // console.log("📌 각 후원 진행률 데이터:", response.data.list);
    console.log(response.data);

    return {
      nextCursor: response.data.nextCursor, // 다음 요청 시 사용할 cursor 값
      list: response.data.list.map((donation) => {
        const progress =
          donation.targetDonation && donation.receivedDonations
            ? Math.floor(
                (donation.receivedDonations / donation.targetDonation) * 100
              )
            : 0; // 진행률 계산
        return {
          id: donation.id, // 후원 ID
          idolId: donation.idolId, // 아이돌 ID
          title: donation.title, // 후원 제목
          subtitle: donation.subtitle, // 후원 부제목
          targetDonation: donation.targetDonation, // 총 모인 조공 금액
          receivedDonations: donation.receivedDonations, // 현재 모인 후원 금액
          deadline: donation.deadline, // 조공 마감일
          createdAt: donation.createdAt, // 후원 생성일 ($date-time)
          status: donation.status, // 후원 진행 상태
          isGoalReached: progress >= 100, // 100% 이상이면 목표 달성
          progress, // 후원 진행률 저장
          daysLeft:
            donation.deadline && !isNaN(new Date(donation.deadline))
              ? Math.max(
                  0,
                  Math.ceil(
                    (new Date(donation.deadline) - new Date()) /
                      (1000 * 60 * 60 * 24)
                  )
                )
              : "∞", // 날짜가 없거나 이상할 경우 무한대 처리
          image: donation.idol?.profilePicture || "/default-image.jpg", // 기본 이미지 설정
          idol: {
            id: donation.idol?.id, // 아이돌 id
            name: donation.idol?.name, // 아이돌 이름
            gender: donation.idol?.gender, // 아이돌 성별
            group: donation.idol?.group, // 아이돌 그룹명
            profilePicture: donation.idol?.profilePicture, // 아이돌 프로필 사진
            totalVotes: donation.idol?.totalVotes, // 아이돌 총 투표 수
          },
        };
      }),
    };
  } catch (error) {
    console.error(
      "후원 목록 요청 실패:",
      error.response ? error.response.data : error.message
    );
    throw error; // 호출한 쪽에서 에러를 처리할 수 있도록 예외를 던짐
  }
};

// [GET] 특정 후원 데이터 가져오기 (ID 기반 조회)
export const fetchDonationById = async (donationId) => {
  try {
    const response = await instance.get(`${BASE_URL}/${donationId}`);
    console.log(
      `후원 데이터 가져오기 성공 (ID: ${donationId}):`,
      response.data
    );
    return response.data;
  } catch (error) {
    console.error(
      `후원 데이터 요청 실패 (ID: ${donationId}):`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [POST] 새로운 후원 생성
export const createDonation = async (donationData) => {
  try {
    const response = await instance.post(BASE_URL, donationData);
    console.log("후원 생성 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "후원 생성 실패:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [PUT] 특정 후원에 기부하기
export const contributeToDonation = async (donationId, sponsorData) => {
  try {
    // API에 PUT 요청 (후원 기부 참여 : PUT /donations/{id}/contribute)
    const response = await instance.put(
      `${BASE_URL}/${donationId}/contribute`,
      sponsorData
    );
    console.log(`후원 참여 성공 (ID: ${donationId}):`, response.data);
    return response.data;
  } catch (error) {
    console.error(
      `후원 참여 실패 (ID: ${donationId})`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// [DELETE] 특정 후원 삭제
export const deleteDonation = async (donationId) => {
  try {
    // API에 DELETE 요청 (후원 삭제 : DELETE /donations/{id})
    const response = await instance.delete(`${BASE_URL}/${donationId}`);
    console.log(`후원 삭제 성공 (ID: ${donationId}):`, response.data);
    return response.data;
  } catch (error) {
    console.error(
      `후원 삭제 실패 (ID: ${donationId}):`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
