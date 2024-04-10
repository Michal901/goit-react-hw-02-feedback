import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;

  &:hover {
    background-color: rgb(152, 255, 253);
  }
`;
export default function FeedbackOptions({ title, options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
