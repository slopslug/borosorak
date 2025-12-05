import { useState, useEffect } from "react";
import "./App.css";

function Store() {
  const [form, setForm] = useState(
    window.localStorage.getItem("form"),
  );

  useEffect(() => {
    window.localStorage.setItem(
      "form",
      form ?? "",
    );
  }, [form]);
  return (
    <input
      className="input"
      value={form ?? ""}
      onChange={(e) => setForm(e.target.value)}
    />
  );
}

export default Store;
