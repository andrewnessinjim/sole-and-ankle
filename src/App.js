import Header from "./Components/Header";
import ShoeIndex from "./Components/ShoeIndex";
import Spacer from "./Components/Spacer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Spacer size={78}/>
      <ShoeIndex/>
    </div>
  );
}

export default App;
