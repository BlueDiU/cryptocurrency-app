import { useContext } from 'react';
import CryptoContext from '../context/CryptoContext';
import Coin from './Coin';
import Loader from './utils/loader/Loader';

function Coins() {
  const { loading, filteredCoins, search } =
    useContext(CryptoContext);

  if (filteredCoins?.length === 0) {
    return (
      <div style={{ height: '100vh' }}>
        <h2 style={{ textAlign: 'center', paddingTop: '3rem' }}>
          No results for <mark>{search}</mark>
        </h2>
      </div>
    );
  }
  return (
    <div className="coin-container">
      {loading ? (
        <Loader />
      ) : (
        filteredCoins?.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            last24hours={coin.price_change_24h}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        ))
      )}
    </div>
  );
}

export default Coins;
