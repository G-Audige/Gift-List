import React from 'react';

function Index({ giftees }) {
  return (
    <div>
      <h1>Gifts</h1>
      <a href='/recipients/new'>
        <h3>Add a new recipient</h3>
      </a>
      <div
        style={{
          border: '2px solid gray',
          backgroundColor: 'green',
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: '220px',
          justifyContent: 'center',
        }}
      >
        {giftees.map((giftee, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundImage: 'url("https://i.imgur.com/Lp1xSOW.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '250px',
                margin: '10px',
                position: 'relative',
                textAlign: 'center',
                width: '350px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '135px',
                }}
              >
                <div
                  style={{
                    marginBottom: '19px',
                  }}
                >
                  <a
                    href={`/recipients/${giftee.id}`}
                    style={{
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textDecoration: 'none',
                      color: 'red',
                    }}
                  >
                    {giftee.name}
                  </a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    margin: '0px -130px 0px 130px',
                    width: '100px',
                  }}
                >
                  <form
                    action={`/recipients/${giftee._id}?_method=DELETE`}
                    method='POST'
                  >
                    <input type='submit' value='Discard' />
                  </form>
                  <a href={`/recipients/${giftee._id}/edit`}>
                    <button>Edit</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
