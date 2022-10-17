import headeLogo from './images/logo.png';
import './App.css';
import Main from './components/Main';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="container header">
        <div className="header__logo">
          <img src={headeLogo} alt="" width={140} height={140} />
        </div>
      </header>
      <Main />
      <Message />
    </div>
  );
}

export default App;
