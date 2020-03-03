import Star from "./Star.js";

function Raiting({ value, onChange }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star onClick={() => onChange(i)} key={i} active={i <= value} />
    );
  }

  return <div className="Raiting">{stars}</div>;
}

export default Raiting;
