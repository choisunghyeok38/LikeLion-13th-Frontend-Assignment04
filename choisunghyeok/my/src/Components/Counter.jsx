

import { useEffect, useState } from "react";
import "./Counter.css";

function Counter({ onZero }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      if (onZero) onZero();
      return; 
    }

    const id = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [count, onZero]);

  return (
    <div className="text">
      <p>{count}초 뒤에 폭파됩니다</p>
    </div>
  );
}

export default Counter;
