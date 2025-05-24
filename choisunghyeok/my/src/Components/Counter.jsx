import { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count => count - 1); 
    }, 1000);
    if(count === 0){
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="text">
      <p>{count}초 뒤에 폭파됩니다</p> 
      {/* 과제 조건 2번 만족 */}
      {/* 과제 조건 3번 만족 */}
    </div>
    
  );
};

export default Counter