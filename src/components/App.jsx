import Statistics from './Statistics';
import Feedback from './Feedback';

function handleClick() {
  console.log('click');
}

export const App = () => {
  return (
    <>
      <Feedback onClick={handleClick} />
      <Statistics />
    </>
  );
};
