import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white px-[10%]">
      <Nav />
      <Mainroutes />
    </div>
  );
}

export default App;
