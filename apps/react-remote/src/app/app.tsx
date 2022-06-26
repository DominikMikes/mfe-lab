import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../components/counter/counter';

class App extends React.Component {

  override render() {
    return ([
        <div>
          <h1>
            Remote React
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
          </h1>
          <Counter></Counter>
        </div>,
    ])
  }
}

class ChildReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('child-react-element', ChildReactElement);
export default App;
