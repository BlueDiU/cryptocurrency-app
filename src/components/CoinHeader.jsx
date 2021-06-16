import React from 'react';
import CoinFormSearch from './CoinFormSearch';

function CoinHeader() {
  return (
    <header className="coin-header">
      <div>
        <h2 className="coin-text">💰 Cryptocurrency</h2>
      </div>

      <div>
        <CoinFormSearch />
      </div>
    </header>
  );
}

export default CoinHeader;
