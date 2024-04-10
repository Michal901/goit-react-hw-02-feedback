export default function Feedback(onClick) {
  return (
    <ul>
      <button onClick={onClick}>Good</button>
      <button onClick={onClick}>Neutral</button>
      <button onClick={onClick}>Bad</button>
    </ul>
  );
}
