import { useRef, useState } from "react";

function Test() {
  const [scroll, setScroll] = useState(0);
  const ScrollContainer = useRef(null);

  const handleScroll = (e) => {
    const currentScroll = e.target.scrollLeft;
    setScroll(currentScroll);
    if (currentScroll > ScrollContainer.scrollWidth / 2) {
      ScrollContainer.current.scrollTo(0);
    }
  };

  return (
    <div
      ref={ScrollContainer}
      onScroll={handleScroll}
      style={{ overflowX: "scroll" }}
    >
      {받아온데이터.map((v, i) => (
        <DonationCard index={i} id={v} />
      ))}
      {받아온데이터.map((v, i) => (
        <DonationCard index={i} id={v} />
      ))}
    </div>
  );
}
