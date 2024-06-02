import "./App.css";
import Input from "./components/Input";
import Toasts from "./components/Toasts";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Input />
      <Toasts />
    </div>
  );
}

export default App;
