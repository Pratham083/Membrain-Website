import NavBar from '../components/NavBar';
import mainLogo from '../assets/logo.svg';
import downArrow from '../assets/down-arrow.png';
import { GameButton } from '../components/GameButton';
import './Home.css';

const games = [
  'ZombiType',
  'Metronome',
  'Memorize',
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
        className="down-arrow"
        src={downArrow}
        alt="V"
        width="75px"
        height="75px"
      ></img>
      <p className="center-text margin-top-20px">Scroll Down to Play</p>
      <div className="button-grid">
        {games.map((game, index) => {
          return <GameButton key={index} buttonText={game}></GameButton>;
        })}
      </div>
    </>
  );
};
