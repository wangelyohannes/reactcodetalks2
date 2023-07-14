import MyButton from "./componenets/Question1";
import Avatar from "./componenets/Question2";
import DiagramHooksExample from "./componenets/Question3";

function App() {
  // Within the App component, we will define the user as an object and the object properites will be passed through the parent (in the Question2.jsx file) componenet and rendered in the child (in the Avatar component below).
  const user = {
    name: "Christopher Robin",
    // Since I am running this app locally, the permissions would not let me pull the photo from an external source.
    // So I downloaded the photo and stored it locally in VSCode and set the url equal to the filepath
    imageUrl: "./christopherrobin.jpeg",
    imageSize: 90,
  };
  return (
    <div className="App">
      <h1>React Code Talks</h1>
      {/* Question 1 component is below. */}
      {/* Inside the MyButton one component (which returns our buttons) we will set the title properites that will be rentered in the text of the buttton */}
      <MyButton title="Add to cart" />
      <MyButton title="Find out more" />
      {/* Qusetion 2 component is below */}
      {/* Inside the Avatar component we will pass the 'user' object as a prop to render the image and name */}
      <Avatar user={user} />
      {/* Quseion 3 component is below */}
      <DiagramHooksExample />
    </div>
  );
}

export default App;
