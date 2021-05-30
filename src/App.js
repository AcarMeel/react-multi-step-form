import { BrowserRouter as Router } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
          <SignupForm />
      </div>
    </Router>
  );
}

export default App;
