class Message extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
            <h4>The counter is: {this.props.counter}</h4>
        );
    }
  }
