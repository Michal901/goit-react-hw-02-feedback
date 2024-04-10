import { useState } from 'react';

import Statistics from './Statistics';
import Feedback from './Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodIncrement() {
    setGood(prevGood => prevGood + 1);
    console.log(good);
  }
  function handleNeutralIncrement() {
    setNeutral(prevNeutral => prevNeutral + 1);
    console.log(neutral);
  }
  function handleBadIncrement() {
    setBad(prevBad => prevBad + 1);
    console.log(bad);
  }

  return (
    <>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        handleGoodIncrement={handleGoodIncrement}
        handleNeutralIncrement={handleNeutralIncrement}
        handleBadIncrement={handleBadIncrement}
      />
    </>
  );
};
