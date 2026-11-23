import { Sidebar } from "./components/Sidebar.jsx";
import { Main } from "./components/Main.jsx";

const App = () => {
  return (
    <div className="container">
      <h1 hidden>Product Feedback App</h1>
      <div className="board">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;