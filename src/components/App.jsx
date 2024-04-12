import { useState } from 'react';
import styled from 'styled-components';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Feedback';

const StyledDiv = styled.div`
  display: flex;
  gap: 15px;
`;

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodIncrement() {
    setGood(prevGood => [prevGood[0] + 1]);
  }
  function handleNeutralIncrement() {
    setNeutral(prevNeutral => [prevNeutral[0] + 1]);
  }
  function handleBadIncrement() {
    setBad(prevBad => [prevBad + 1]);
  }

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <StyledDiv>
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
        </StyledDiv>
      </Section>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          />
        </Section>
      )}
    </>
  );
};
