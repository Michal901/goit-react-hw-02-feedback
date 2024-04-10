import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledOl = styled.ol`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-transform: uppercase;
`;

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
      <StyledOl>
        <li>
          Good: <strong> {good}</strong>
        </li>
        <li>
          Neutral: <strong> {neutral}</strong>
        </li>
        <li>
          Bad: <strong> {bad}</strong>
        </li>
        <li>
          Total:<strong> {total}</strong>
        </li>
        <li>
          Positive feedback:<strong> {positivePercentage}%</strong>
        </li>
      </StyledOl>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
