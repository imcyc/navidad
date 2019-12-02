import React, {useState, useEffect} from 'react';

function Cliker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Has dado click ${count}`;
  });
  return(
    <button onClick={() => setCount(count + 1)}>DAR CLICK {count}</button>
  )
}

export default Cliker;