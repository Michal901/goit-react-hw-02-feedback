import PropTypes from 'prop-types';

export default function Feedback({ message }) {
  return <h2 className="feedback-msg">{message}</h2>;
}

Feedback.propTypes = {
  message: PropTypes.string.isRequired,
};
