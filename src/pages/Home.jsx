import NavBar from '../components/NavBar';
import mainLogo from '../assets/logo.svg';
import downArrow from '../assets/down-arrow.png';
import './Home.css';

const games = [
  'ZombiType',
  'Metronome',
  'Geography',
  'Solve',
  'Click',
  'Analyze',
];
export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <img className="main-logo" src={mainLogo} alt="Welcome to Membrain"></img>
      <p className="center-text">Membrain</p>
      <img
        className="center-image"
        src={downArrow}
        alt="V"
        width="75px"
        height="75px"
      ></img>
      <p className="center-text margin-top-20px">Scroll Down to Play</p>
    </>
  );
};
