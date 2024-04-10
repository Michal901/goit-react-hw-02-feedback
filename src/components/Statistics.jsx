export default function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
  handleGoodIncrement,
  handleNeutralIncrement,
  handleBadIncrement,
}) {
  return (
    <>
      <ul>
        <button onClick={handleGoodIncrement}>Good</button>
        <button onClick={handleNeutralIncrement}>Neutral</button>
        <button onClick={handleBadIncrement}>Bad</button>
      </ul>
      <ol>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ol>
    </>
  );
}
