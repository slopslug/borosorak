import { useState, useEffect } from "react";

function Indicator() {
  const [online, setOnline] = useState(
    navigator.onLine,
  );

  useEffect(() => {
    const timer = setTimeout(
      setOnline,
      1000,
      navigator.onLine,
    );

    return () => clearInterval(timer);
  }, [online]);

  return (
    <div>
      {online ? "🟢 Online" : "🔴 Offline"}
    </div>
  );
}

export default Indicator;
