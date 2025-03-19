import idolDetails from "./idolDetails";

function TempDetails({ id }) {
  const details = idolDetails[String(id)];

  if (!details) {
    return null;
  }

  return (
    <div className="detail-left">
      {/* <h1>{details.title}</h1>
      <h2>{details.subtitle}</h2> */}
      <div>{details.description}</div>
    </div>
  );
}

export default TempDetails;
