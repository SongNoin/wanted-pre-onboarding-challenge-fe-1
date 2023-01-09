import { useEffect } from "react";
import { getTodos } from "../commons/api/getTodos";

export default function Home() {
  useEffect(() => {
    getTodos().then((res) => console.log(res));
  }, []);
  return (
    <>
      <div>홈</div>
    </>
  );
}
