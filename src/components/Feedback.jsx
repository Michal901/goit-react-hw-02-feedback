export default function Feedback({
  good = 0,
  neutral = 0,
  bad = 0,
  handleGoodIncrement,
  handleNeutralIncrement,
  handleBadIncrement,
}) {
  return (
    <ul>
      <button onClick={handleGoodIncrement}>Good: {good}</button>
      <button onClick={handleNeutralIncrement}>Neutral: {neutral}</button>
      <button onClick={handleBadIncrement}>Bad: {bad}</button>
    </ul>
  );
}
