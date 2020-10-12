import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import "./App.css";

class App extends React.Component {
state = {
loggedIn: false,
}

onLogin = props => {
props.preventDefault();
this.setState({
loggedIn: true,
});
}

render() {
return (
<div className="App">
<Header />
{!this.state.loggedIn ? (
<Home onLogin={this.onLogin} />
):(
<Dashboard/>
)}
</div>
);
}
}

export default App;

