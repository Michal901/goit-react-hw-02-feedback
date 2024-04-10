import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <h2 className="section-h2">{title}</h2>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
