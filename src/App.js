import axios from "axios"

function App() {
  const usersUrl = 'http://localhost:8080/users'
  const options = {
    header: { 'Content-Type': 'application/json' }
  }

  const getHandler = () => {
    axios.get(usersUrl, options)
      .then(response => console.log(response))
  }

  const postHandler = () => {
    const user = JSON.stringify({
      email: 'adz@mail.xo',
      password: '123'
    })

    axios.post(usersUrl, user, options)
      .then(response => console.log(response))
  }

  const putHandler = () => {
    const user = JSON.stringify({
      email: 'adzani@mail.com',
      password: '12345'
    })

    axios.put(usersUrl + '/1', user, options)
      .then(response => console.log(response))
  }

  const deleteHandler = () => {
    axios.delete(usersUrl + '/1', options)
      .then(response => console.log(response))
  }

  return (
    <div>
      <button onClick={ getHandler }>GET</button>
      <button onClick={ postHandler }>POST</button>
      <button onClick={ putHandler }>PUT</button>
      <button onClick={ deleteHandler }>DELETE</button>
    </div>
  );
}

export default App;
