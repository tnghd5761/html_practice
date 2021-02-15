import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <meta charset="utf-8"></meta>
      </header>
      <body>
        <form action="http://localhost/login.php">
            <p>아이디 : <input type="text" name="id"></input></p>
            <p>비밀번호 : <input type="password" name="pwd"></input></p>
            <p>주소 : <input type="text" name="address"></input></p>
            <input type="submit"></input>
        </form>
      </body>
    </div>
  );
}

export default App;
