import axios from "axios";

// HTTP 상태 코드 상수 (200: OK, 201: Created)
const HTTP_STATUS = { STATUS_OK: 200, STATUS_CREATED: 201 };

// 에러 메시지용 데이터
const ERR_DATA = {
  votes: "투표",
  idols: "아이돌",
  donations: "후원",
  "charts/female": "이달의 여자 아이돌 차트",
  "charts/male": "이달의 여자 남자 아이돌 차트",
};

// 팀명
const teamName = "14-3";

// axios 기본 설정
const instance = axios.create({
  baseURL: `https://fandom-k-api.vercel.app/${teamName}`, // 통신할 서버 URL 기본값
  timeout: 1000, // 10초 제한
  headers: {
    // 서버가 요청을 이해할 수 있도록 정보 추가
    "Content-Type": "application/json", // JSON 데이터 형식 사용
    Accept: "application/json", // 응답을 JSON 형식으로 기대
  },
});

// 재요청 함수 (네트워크 오류 발생 시 최대 3회 재시도)
const retryRequest = async (error, retries = 3) => {
  if (!error.config || retries <= 0) {
    return Promise.reject(error); // 요청 정보가 없거나 재시도 횟수 초과 시 에러 반환
  }
  console.warn(`요청 실패, ${retries}회 남음. 재시도 중..`); // 경고 메시지 출력

  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기 후 재요청

  return instance(error.config) // 재요청
    .then((response) => response)
    .catch((err) => retryRequest(err, retries - 1)); // 횟수 감소 후 다시 호출
};

// 요청 인터셉터 : API 요청 로그 출력
instance.interceptors.request.use(
  (config) => {
    console.log(`API 요청: [${config.method.toUpperCase()}] ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error) // 요청 실패 시 오류 반환
);

// 응답 인터셉터 : API 응답 데이터 가공
instance.interceptors.request.use(
  (response) => {
    console.log("API 응답 성공:", response.data); // 응답 성공 로그 출력
    return response; // 응답 데이터 반환
  },
  (error) => {
    const requestPath = error.config?.url?.split("/").pop(); // 요청 경로의 마지막 부분만 추출
    const errorMessage = ERR_DATA[requestPath] || "데이터"; // 요청 경로에 맞는 에레 메시지 출력, 없으면 "데이터" 사용

    console.error(
      `${errorMessage} 요청 실패:`,
      error.response ? error.response.data : error.message
    );

    // 5XX 서버 오류 시, 재요청 시도
    if (!error.response || error.response.status >= 500) {
      return retryRequest(error);
    }
    return Promise.reject(error); // 오류를 반환하여 API 요청한 곳에서 처리 가능
  }
);

export default instance;
