// Using Hooks & Sharing Data from Components:  Visit the https://react.dev/learn website and explain the diagram and writeup in the Using Hooks example in detail.
// Additionally, answer -  Why are hooks beneficial?  Can Hooks be used in class components?  What other hooks are available other than useState and useEffect?

// First we need to import useState from react so that we can "hook" into the state of our components
import { useState } from "react";

const DiagramHooksExample = () => {
  // Here we will hook into the state and set the initial state to zero
  const [count, setCount] = useState(0);

  // Then we will create a click function to update the state with "setState" to a number higher with each click
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Counters that update together</h3>
      {/*  Lastly, when we render this code we will set the count variable and give it the onClick function */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};
// Here we create the button component and set its text with the count variable displaying how many ties it has been clicked
// We pass in the count and onClick as props that will be passed into the child componenet above
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default DiagramHooksExample;

// Why are hooks beneficial?
// Hooks are beneficial because they simplify state management, promote code reuse, improve code readability, support a functional programming approach, and are compatible with existing code. They provide an easier and more efficient way to work with state in functional components.
// Can Hooks be used in class components?
// Hooks cannot be used directly in class components. Class components have their own way of managing state and lifecycle methods, such as this.state and componentDidMount(). Therefore, hooks should on ly be used in functional components.
// What other hooks are available other than useState and useEffect?
// useContext: Allows you to access the value of a React context within a component.
// useReducer: Provides an alternative way to manage complex state by using a reducer function, similar to how Redux handles state management.
// useCallback: Returns a memoized callback function, optimizing performance by preventing unnecessary re-rendering of components that depend on the callback.
// useMemo: Memoizes the result of a function, optimizing performance by caching the value and recomputing it only when its dependencies change.
// useRef: Returns a mutable ref object that persists across component renders, allowing you to access and modify the ref's current value.
// useLayoutEffect: Similar to useEffect, but it runs synchronously immediately after the DOM has been updated, which can be useful for measurements and DOM manipulations.
// useDebugValue: Provides a custom hook for displaying custom labels in React DevTools for custom hooks.
