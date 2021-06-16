import React, { useContext } from 'react';
import CryptoContext from '../context/CryptoContext';

function CoinFormSearch() {
  const { search, setSearch } = useContext(CryptoContext);

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <form>
      <input
        autoComplete="off"
        type="search"
        className="coin-input"
        placeholder="🔍 search a crypto..."
        name="search"
        value={search}
        onChange={handleSearch}
      />
    </form>
  );
}

export default CoinFormSearch;
