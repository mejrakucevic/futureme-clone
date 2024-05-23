import "./App.css";
import Header from "./Components/Header";
import Letter from "./Components/Letter";
import Send from "./Components/Send";
<script
  src="https://kit.fontawesome.com/a8603e7bc9.js"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-end w-full">
        <div className="w-5/6">
          <Letter />
        </div>
        <div className="w-1/6 ">
          <Send />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
