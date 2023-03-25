import './App.css';
// import Greet from './componemts/Title'
// import Home from './Pages/Home'
// import Counter from './componemts/Counter';
// import About from './Pages/About';
// import Title from './componemts/Title';
// import { useState } from 'react';
import List from './componemts/List';

function App() {

  // const [page, setPage] = useState("Home")

  // const changePage = () => {
  //   if (page === "Home") {
  //     setPage("Title")
  //   }
  //   else {
  //     setPage("Home")
  //   }
  //   console.log("clicked")
  // }

  return (
    <div className="App">
      {/* {page === "Home" ? <Home /> : <Title />}
      <button onClick={changePage}>Click here to go to {page==="Home"?"Title":"Home"}</button> */}
      <List/>
    </div>
  );
}

export default App;
