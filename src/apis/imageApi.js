import instance from "./axiosInstance";

const BASE_URL = "/image/upload";

// [POST] 이미지 업로드
export const uploadImage = async (file) => {
  try {
    const formData = new FormData(); // 파일을 서버에 보낼 수 있는 FormData 객체 생성
    formData.append("image", file); // image 키로 파일을 FormData에 추가

    // API에 POST 요청 (이미지 업로드 : POST /image/upload)
    const response = await instance.post(BASE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" }, // FormData 전송을 위한 헤더 설정
    });

    console.log("이미지 업로드 성공:", response.data);

    return {
      url: response.data.url,
    };
  } catch (error) {
    console.error(
      "이미지 업로드 실패:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
