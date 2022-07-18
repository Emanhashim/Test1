import React from 'react'

function Tx() {
  const users = 
  [
    {id: 1, name: "Gabriel", idade: 25},
    {id: 2, name: "Beatriz", idade: 26}
  ]

  return (
    <div>
      {users.map((user) => 
      <div className='App'>
        <p>
          {user.id} {user.name} {user.idade}
        </p>
        <button onClick={() => console.log(user.id,user.name)}>Clique aqui</button>
        <h1>{user.id}</h1>
        
      </div>
      )}
    </div>
  );
}

export default Tx