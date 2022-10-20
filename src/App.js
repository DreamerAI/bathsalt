import headerLogo from './images/logo.png';
import './App.css';

import Main from './components/Main/Main';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <header className="container header">
        <div className="header__logo">
          <img src={headerLogo} alt="Лого соль для ванн" width={140} height={140} />
        </div>
      </header>

      <Message />
      <Main />
    </div>
  );
}

export default App;
