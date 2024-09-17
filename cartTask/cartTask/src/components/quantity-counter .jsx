import React from "react";

class QuantityCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      quantity: Math.max(0, prevState.quantity - 1),
    }));
  };

  render() {
    return (
      <div className="flex items-center justify-center ">
        <button
          onClick={this.decrement}
          className="bg-blue-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <span className="text-2xl font-semibold border-4 w-[3rem] text-center ">
          {this.state.quantity}
        </span>
        <button
          onClick={this.increment}
          className="bg-blue-gray-700  text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    );
  }
}

export default QuantityCounter;
