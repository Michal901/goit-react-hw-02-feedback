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
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <StyledDiv>
          <FeedbackOptions
            title={'Good'}
            options={[good]}
            onLeaveFeedback={() => handleIncrement('good')}
          />
          <FeedbackOptions
            title={'Neutral'}
            options={[neutral]}
            onLeaveFeedback={() => handleIncrement('good')}
          />
          <FeedbackOptions
            title={'Bad'}
            options={[bad]}
            onLeaveFeedback={() => handleIncrement('good')}
          />
        </StyledDiv>
      </Section>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={total}
          />
        </Section>
      )}
    </>
  );
};
