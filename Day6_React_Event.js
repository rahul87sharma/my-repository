// Question 1 : Handling Click Events:
// •Create a button in a component that, when clicked, logs "Button clicked!" to the console.


import React from 'react';

const ClickButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ClickButton;


// Question 2 : Form Submission Handling:
// •Implement a form with an input field and a submit button. On form submission, prevent the default action and log the input value to the console.


import React, { useState } from 'react';

const FormSubmit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmit;


// Question 3 : Event Binding in Class Components:
// •Write a class-based component that maintains a count in its state and has an increment button. Ensure that the event handler is correctly bound to the class instance.


import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;


// Question 4 : Synthetic Events:
// •Explain how React's synthetic event system works compared to native events, and write an example where you handle an input change event using synthetic events.


import React from 'react';

const SyntheticEventExample = () => {
  const handleChange = (e) => {
    console.log("Input Changed:", e.target.value);
    console.log("Synthetic Event:", e);
  };

  return <input type="text" onChange={handleChange} placeholder="Type here" />;
};

export default SyntheticEventExample;


// Question 5 : Event Delegation:
// •Create a list of items where clicking on any item logs its text content to the console. Use event delegation for handling clicks efficiently.


import React from 'react';

const ItemList = () => {
  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      console.log("Clicked Item:", e.target.textContent);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
};

export default ItemList;


// Question 6 : Mouse Events:
// •Build a component that changes its background color when hovered over using mouse events (onMouseEnter and onMouseLeave).


import React, { useState } from 'react';

const HoverBox = () => {
  const [bgColor, setBgColor] = useState("lightgray");

  const handleMouseEnter = () => setBgColor("lightblue");
  const handleMouseLeave = () => setBgColor("lightgray");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "200px",
        height: "200px",
        textAlign: "center",
        lineHeight: "200px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover over me!
    </div>
  );
};

export default HoverBox;


// Question 7 : Keyboard Events:
// •Implement an input field that listens for keypress events and logs the pressed key to the console.


import React from 'react';

const KeyPressHandler = () => {
  const handleKeyPress = (e) => {
    console.log("Key Pressed:", e.key);
  };

  return (
    <input
      type="text"
      placeholder="Type something"
      onKeyPress={handleKeyPress}
    />
  );
};

export default KeyPressHandler;
