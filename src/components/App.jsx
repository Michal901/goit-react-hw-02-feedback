import { useState } from 'react';

import Statistics from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodIncrement() {
    setGood(prevGood => prevGood + 1);
  }
  function handleNeutralIncrement() {
    setNeutral(prevNeutral => prevNeutral + 1);
  }
  function handleBadIncrement() {
    setBad(prevBad => prevBad + 1);
  }

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        handleGoodIncrement={handleGoodIncrement}
        handleNeutralIncrement={handleNeutralIncrement}
        handleBadIncrement={handleBadIncrement}
        positivePercentage={countPositiveFeedbackPercentage()}
        total={countTotalFeedback()}
      />
    </>
  );
};
