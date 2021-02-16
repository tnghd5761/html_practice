import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <meta charset="utf-8"></meta>
      </header>
      <body>
        <form action="http://localhost/login.php"
        method="post" encType="multipart/form-data">
            <input type="password"></input>
            <input type="file" name="profile"></input>
            <p></p>
            <p>버튼 : <button value="버튼" onClick={function(e){
              e.preventDefault();
              alert('hello');
            }}
            >버튼</button></p>
            <input type="submit"></input>
        </form>
      </body>
    </div>
  );
}

export default App;
