// Create a new component called Avatar.
// Given the following variable for a user, display the content inside the Avatar component when rendered.
// Explain your code. Describe how curly braces are useful to display data.

// const user = {
//   name: 'Christopher Robin',
//   imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ',
//   imageSize: 90,
// };
import React from "react";

// Create component to render the "Avatar"
// Pass in our user props, with user in curly braces to destructure the props (this way we do not need to use props.user.value, we can just call user.value)
const Avatar = ({ user }) => {
  return (
    <div>
      {/* Pass the needed user props into the tags to dsplay that prop dynamically as the text */}
      <h2>{user.name}</h2>
      {/* Here we will pass the props in as values to be rendered within the image tag */}
      {/* These props will render the image as well as the alt and sizing */}
      <img src={user.imageUrl} alt={user.name} style={{ width: user.imageSize }} />{" "}
    </div>
  );
};

export default Avatar;

// How are curly braces are useful to display data?
// Curly braces are useful when displaying data, because they allow us to call on information dynamically.
// The curly braces signify that we are using JavaScript code inside our HTML elements.
// This way we can call on variables and values to then diplay them dynamically.
