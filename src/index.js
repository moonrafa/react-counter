import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  reset = () => {
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrease}> Decrease </button>
        <button onClick={this.reset}> Reset </button>
      </div>
    )
  }
}

const el = <Counter />
root.render(el)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
