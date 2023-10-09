// Class Component
class MyApp extends React.Component {
  // Constructor Function
  constructor() {
    super();
    // State Declaration
    this.state = {
      title_1: "What are you studying?",
      title_2: "Learn What Else?",
    };
  }

  // Arrow Function
  handleButtonClick = () => {
    // Change the state value
    this.setState({
      title_1: "Learn Javascript",
      title_2: "Learn React",
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.title_1}</h2>
        <h2>{this.state.title_2}</h2>
        <button onClick={this.handleButtonClick}>
          Let's Learn Programming
        </button>
      </div>
    );
  }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById("root")).render(myElement);
