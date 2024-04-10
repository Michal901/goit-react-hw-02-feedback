import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
`;

export default function Section({ title, children }) {
  return (
    <section>
      <h2 className="section-h2">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
