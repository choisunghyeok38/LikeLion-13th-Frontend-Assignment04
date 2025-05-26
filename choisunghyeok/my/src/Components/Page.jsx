
import { useState } from "react";
import "./Page.css";
import Counter from "./Counter";
import Bomb from "./bomb.jpg";

const Page = () => {
  const [modal, setModal] = useState(false);


  const handleCloseModal = () => setModal(false);

  return (
    <div className="container">
      <button onClick={() => setModal(prev => !prev)}>모달 보기</button> 
      {/* 과제 조건 1번 만족 */} 
      {/* 과제 조건 4번 만족 */}
      {modal && (
          <div className="message">
            <h1>💣폭탄 메세지💣</h1>
            <Counter onZero={handleCloseModal} />
            <img src={Bomb} alt="폭탄" />
          </div>
      )}
    </div>
  );
};

export default Page;
