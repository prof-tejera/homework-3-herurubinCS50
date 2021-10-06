import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Login form component (TODO)</header>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Pager component</header>
          <div className="App-content">
            <Pager pageItems={67} itemsPerPage={5} maxBtnCount={4}  />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Radio Buttons component (TODO)</header>
          <div className="App-content">
            <RadioButtons buttons={["orange", "Cherry", "Lime"]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
