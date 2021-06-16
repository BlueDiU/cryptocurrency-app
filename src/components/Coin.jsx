import React from 'react';
import { formatPrice } from '../helper/formatPrice';
import './Coin.css';
import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
} from 'react-icons/io';

function Coin({
  name,
  price,
  symbol,
  marketcap,
  last24hours,
  image,
  priceChange,
}) {
  return (
    <section>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" className="center" />

          <div className="coin-name-symbol">
            <h2>{name}</h2>
            <span className="coin-symbol">{symbol}</span>
          </div>
        </div>

        <div className="coin-data">
          <p className="coin-price">
            <strong>Price</strong> $ {formatPrice(price)}
          </p>
          <p className="coin-volume">
            <strong>Last 24H: </strong> ${' '}
            {formatPrice(last24hours)}
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">
              <span className="coin-down">
                <IoMdArrowDropdown />
              </span>
              {priceChange?.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              <span className="coin-up">
                <IoMdArrowDropup />
              </span>
              {priceChange?.toFixed(2)}%
            </p>
          )}
          <br />
          <p className="coin-marketcap">
            <span style={{ color: '#F4D03F' }}>Mkt Cap:</span> $
            {marketcap?.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Coin;
