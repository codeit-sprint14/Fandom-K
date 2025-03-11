import { useEffect, useState } from "react";
import axios from "axios";

import ProfileIco from "../../profiles/ProfileIco";
import * as S from "./style";

function Skeletons() {
  return (
    <S.Skeleton>
      <div className="profile" />
      <div className="description" />
    </S.Skeleton>
  );
}

async function getting(gender) {
  try {
    const response = await axios.get(
      "https://fandom-k-api.vercel.app/14-3/idols?pageSize=200"
    );
    const lists = response.data.list;
    // console.log("성공:", lists);
    const filtered = lists.filter((e) => e.gender === gender);
    return filtered;
  } catch (error) {
    console.error(
      "실패:",
      error.response ? error.response.data : error.message
    );
  }
}

async function vote(id) {
  try {
    const response = await axios.post(
      "https://fandom-k-api.vercel.app/14-3/votes",
      {
        idolId: id,
      }
    );
    console.log("성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "실패:",
      error.response ? error.response.data : error.message
    );
  }
}

function ModalVote({ onClick, onOpen }) {
  const [select, setSelect] = useState(0);
  const [data, setData] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [gender, setGender] = useState("female");

  useEffect(() => {
    if (isExiting) {
      setTimeout(() => {
        onOpen(false);
      }, 400);
    }
  }, [isExiting, onOpen]);

  const handleClick = (e) => {
    vote(select);
    const credit = window.localStorage.getItem("credit");
    window.localStorage.setItem("credit", +credit - 1000);
    onClick(`투표했어요! 좋은 결과 나오길 바라요 💘`);

    setIsExiting(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getting(gender);
      setData(result);
    };

    fetchData();
  }, [gender]);

  const QuantityList = ({ children, id, data, rank }) => {
    const handleCheck = (e) => {
      e.target.checked && setSelect(e.target.id);
    };

    return (
      <li>
        <input
          type="radio"
          name="a"
          id={id}
          value={id}
          checked={select == id}
          onChange={handleCheck}
        />
        <label htmlFor={id}>
          <S.ProfileContainer>
            <S.ProfileIcoContainer>
              <ProfileIco img={data.profilePicture} checked={select == id} />
            </S.ProfileIcoContainer>
            <S.Rank>{rank + 1}</S.Rank>
            <S.InfoContainer>
              <h3>{data.group}</h3>
              <h2>{children}</h2>
            </S.InfoContainer>
          </S.ProfileContainer>
          <span style={{ flexGrow: 1 }} />
          <S.Votes>{data.totalVotes}</S.Votes>
        </label>
      </li>
    );
  };

  return (
    <>
      <S.Container isExiting={isExiting}>
        <header>
          <select id="" onChange={(e) => setGender(e.target.value)}>
            <option value="female">이달의 여자 아이돌</option>
            <option value="male">이달의 남자 아이돌</option>
          </select>
          <img />
        </header>
        <S.ModalChargeQuantity>
          <div />
          {data
            ? data.map((e, i) => (
                <QuantityList
                  key={i}
                  id={e.id}
                  rank={i}
                  selected={select}
                  data={e}
                >
                  {e.name}
                </QuantityList>
              ))
            : Array(6)
                .fill(null)
                .map(() => <Skeletons />)}
        </S.ModalChargeQuantity>
        <S.Btn onClick={handleClick}>투표하기</S.Btn>
      </S.Container>
      <S.Shade isExiting={isExiting} onClick={() => setIsExiting(true)} />
    </>
  );
}

export default ModalVote;
