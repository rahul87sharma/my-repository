// Question 1 : Basic Prop Passing:
// •Create a functional component called Greeting that accepts a prop named name and displays "Hello, {name}!" in an <h1> tag.


import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;


// Question 2 : Multiple Props:
// •Design a component UserProfile that takes firstName, lastName, and age as props and displays them in a structured format.


import React from 'react';

const UserProfile = ({ firstName, lastName, age }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserProfile;


// Question 3 Default Props:
// •Implement a component Car that accepts a prop brand. If no brand is provided, it should default to "Toyota".


import React from 'react';

const Car = ({ brand = "Toyota" }) => {
  return <h3>The car brand is {brand}.</h3>;
};

export default Car;


// Question 4 : Prop Types Validation:
// •Use PropTypes to validate the props of a component Product that takes name, price, and isAvailable. Make sure to enforce that name is a string, price is a number, and isAvailable is a boolean.


import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, isAvailable }) => {
  return (
    <div>
      <h3>Product Name: {name}</h3>
      <p>Price: ${price}</p>
      <p>{isAvailable ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Product;


// Question 5 : Passing Functions as Props:
// •Create a component called Counter that accepts a function prop named onIncrement. When a button is clicked, it should call this function to increase the count.


import React from 'react';

const Counter = ({ onIncrement }) => {
  return (
    <button onClick={onIncrement}>Increase Count</button>
  );
};

export default Counter;


// Question 6 : Nested Components with Props:
// •Build an application with two components: App (parent) and Child. Pass data from the parent to the child using props, where the child displays the data received.


import React from 'react';

const Child = ({ message }) => {
  return <p>Message from Parent: {message}</p>;
};

const App = () => {
  const data = "Hello from the parent component!";
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={data} />
    </div>
  );
};

export default App;


// Question 7 : Conditional Rendering Based on Props:
// •Develop a component called StatusMessage that takes a prop named status. Render different messages based on whether the status is "success", "error", or "loading".


import React from 'react';

const StatusMessage = ({ status }) => {
  if (status === "success") {
    return <p style={{ color: "green" }}>Operation was successful!</p>;
  } else if (status === "error") {
    return <p style={{ color: "red" }}>There was an error.</p>;
  } else if (status === "loading") {
    return <p style={{ color: "blue" }}>Loading, please wait...</p>;
  } else {
    return <p>Status unknown.</p>;
  }
};

export default StatusMessage;
