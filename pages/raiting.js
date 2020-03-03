import Raiting from "../components/Raiting";
import { useState } from "react";
// import Star from "./Star";

function RaitingPage() {
  const [rating, setRaiting] = useState(2);

  return (
    <>
      <Raiting value={rating} onChange={setRaiting} />
    </>
  );
}

export default RaitingPage;
