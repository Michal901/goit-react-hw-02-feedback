import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState([0]);
  const [neutral, setNeutral] = useState([0]);
  const [bad, setBad] = useState([0]);

  function handleGoodIncrement() {
    setGood(prevGood => [prevGood[0] + 1]);
  }
  function handleNeutralIncrement() {
    setNeutral(prevNeutral => [prevNeutral[0] + 1]);
  }
  function handleBadIncrement() {
    setBad(prevBad => [prevBad[0] + 1]);
  }

  const countTotalFeedback = () => good[0] + neutral[0] + bad[0];
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good[0] / total) * 100) : 0;
  };

  return (
    <>
      <FeedbackOptions
        title={'Good'}
        options={good}
        onLeaveFeedback={handleGoodIncrement}
      />
      <FeedbackOptions
        title={'Neutral'}
        options={neutral}
        onLeaveFeedback={handleNeutralIncrement}
      />
      <FeedbackOptions
        title={'Bad'}
        options={bad}
        onLeaveFeedback={handleBadIncrement}
      />
      <Statistics
        good={good[0]}
        neutral={neutral[0]}
        bad={bad[0]}
        positivePercentage={countPositiveFeedbackPercentage()}
        total={countTotalFeedback()}
      />
    </>
  );
};
