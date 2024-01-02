import React from 'react';

function Show({ giftee }) {
  return (
    <>
      <a href='/recipients'>List</a>
      <h1>
        {giftee.name} has been{' '}
        {giftee.nice ? <span>nice</span> : <span>naughty</span>} this year and
        so will receive{' '}
        {giftee.nice ? <span>a {giftee.gift}</span> : <span>coal</span>}.
      </h1>
    </>
  );
}

export default Show;
