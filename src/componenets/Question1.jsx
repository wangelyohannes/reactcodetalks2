// Refactor using the code below. Create the functionality for a reusable button component that will accept ‘title’ as props that will display as the text of the button when rendered inside of App.js.
// Render the button twice with the titles:  “Add to cart”  and  “Find out more”
// Explain your code. Describe how props work. What is the difference between props and state?
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp(){
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// Import react
import React from "react";

// Create a component to render the button
// Pass in props so that they can be used dynamically within the component
const MyButton = (props) => {
  // Then assign the text within the button tag to {props.title}
  // We use the curly braces to tell the jsx file that JavaScript is being returned
  // Then, in the App.js file where we call this component we will assign its prop title which will be then pulled in here and rendered
  return <button>{props.title}</button>;
};

export default MyButton;

// How Props Work:
//Props simply pass datat from a parent
// Props in React are used to pass data from a parent component to its child component.
// Props are simply properties contained in a child component that are called on by a parent component. The parent component can then dynamically render those props.

// Difference Between Props and State:
// Props and state are similar, but have one big distinguishing difference. Props are rad-only data, while state can be updated and changed by the code's logic.
// Props are used for configuration and customization of components. While state is used to handle "component-specific" behavior.
// State can be changed and updated within the component itself using setState(). When the state changes/updates, the component is re-rendered.
