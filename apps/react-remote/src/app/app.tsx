import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  override render() {
    return ([
        <h1>
          Remote React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,
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
