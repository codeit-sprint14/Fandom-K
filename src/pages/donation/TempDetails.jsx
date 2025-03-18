import idolDetails from "./idolDetails";

function TempDetails({ id }) {
  const details = idolDetails[String(id)];

  if (!details) {
    return (
      <div className="detail-left">
        <h1>정보 없음</h1>
        <p>해당 아이돌에 대한 상세 후원 정보가 아직 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="detail-left">
      <h1>{details.title}</h1>
      <h2>{details.subtitle}</h2>
      <div>{details.description}</div>
    </div>
  );
}

export default TempDetails;
