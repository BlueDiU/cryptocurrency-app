import React, { useEffect, useState } from 'react';
import { useFetch } from '../hook/useFetch';
import CryptoContext from './CryptoContext';

let URL_COINS =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

function CryptoState(props) {
  const { data, loading } = useFetch(URL_COINS);
  const [coinsData, setCoinsData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      const coins = await data;
      setCoinsData(coins);
    })();
  }, [data]);

  const searchTerm = (term) => {
    setSearch(term);
  };

  const filteredCoins = coinsData?.filter((coin) =>
    coin.name.toLowerCase().trim().includes(search.toLowerCase())
  );

  return (
    <CryptoContext.Provider
      value={{
        coinsData,
        loading,
        filteredCoins,
        search,
        setSearch,
        searchTerm,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
}

export default CryptoState;
