export default function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  handleGoodIncrement,
  handleNeutralIncrement,
  handleBadIncrement,
}) {
  const positivePercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

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
        <li>Total: {good + neutral + bad}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ol>
    </>
  );
}
