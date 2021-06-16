import './App.css';
import Coins from './components/Coins';
import CryptoState from './context/CryptoState';
import ScrollTopBtn from './components/utils/scrollTopBtn/ScrollTopBtn';
import CoinHeader from './components/CoinHeader';

function App() {
  return (
    <CryptoState>
      <main>
        <CoinHeader />

        <div className="coin-app">
          <Coins />

          <ScrollTopBtn />
        </div>
      </main>
    </CryptoState>
  );
}

export default App;
