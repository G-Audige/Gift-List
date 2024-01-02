import React from 'react';

function Edit({ giftee }) {
  return (
    <>
      <a href="/recipients">Back</a>
      <form action={`/recipients/${giftee._id}?_method=PUT`} method="POST">
        <label style={{ margin: '1em' }}>Name:</label>
        <input type="text" name="name" defaultValue={giftee.name} />
        <br />
        <label style={{ margin: '1em', marginRight: '28px' }}>Gift:</label>
        <input type="text" name="gift" defaultValue={giftee.gift} />
        <br />
        <label style={{ margin: '1em' }}>
          This person been nice this year:
        </label>
        {giftee.nice ? (
          <input type="checkbox" name="nice" defaultChecked />
        ) : (
          <input type="checkbox" name="nice" />
        )}
        <br />
        <input
          type="submit"
          value="Submit Changes"
          style={{ margin: '1em', marginTop: '5px' }}
        />
      </form>
    </>
  );
}

export default Edit;
