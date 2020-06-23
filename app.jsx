class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        counter: 1
    };
  }

  increment() {
      console.log("increment");
      this.setState({
          counter: this.state.counter + 1
      })
  }

  render() {
    return (
        <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={() => this.increment()}>
                increment
            </button>
            <Message counter={this.state.counter} />
        </div>
      );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);