import React from 'react';

function New() {
  return (
    <>
      <a href="/recipients">Back</a>
      <h1>Add a new recipient</h1>
      <form action="/recipients" method="POST">
        <label style={{ margin: '1em' }}>Name:</label>
        <input type="text" name="name" />
        <br />
        <label style={{ margin: '1em', marginRight: '28px' }}>Gift:</label>
        <input type="text" name="gift" />
        <br />
        <label style={{ margin: '1em' }}>
          This person been nice this year:
        </label>
        <input type="checkbox" name="nice" />
        <br />
        <input
          style={{ margin: '1em', marginTop: '5px' }}
          type="submit"
          value="Add recipient"
        />
      </form>
    </>
  );
}

export default New;
