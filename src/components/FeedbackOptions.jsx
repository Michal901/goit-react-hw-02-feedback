import PropTypes from 'prop-types';

export default function FeedbackOptions({ title, options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
