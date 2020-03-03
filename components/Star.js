import cn from "classnames";
// import "../Star.css";

function Star({ active, onClick }) {
  return (
    <div onClick={onClick} className={cn("Star", { active })}>
      <style jsx>{`
        .Star {
          display: inline-block;
          width: 25px;
          height: 25px;
          background: gray;
          margin-right: 10px;
        }
        .Star.active {
          background: red;
        }
      `}</style>
    </div>
  );
}

export default Star;
