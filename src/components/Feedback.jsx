import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export default function Notification({ message }) {
  return <StyledH2 className="feedback-msg">{message}</StyledH2>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
