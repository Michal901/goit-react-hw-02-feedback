export default function Statistics({ title, good = 0, neutral = 0, bad = 0 }) {
  return (
    <ol>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ol>
  );
}
