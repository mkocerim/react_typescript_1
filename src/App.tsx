


import { HashRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import CounterPage from "./pages/counter-page/counter_page";
import TodoPage from "./pages/todo-page/todo_page";

function App() {





  return (
    <HashRouter>
    <div className="container mt-5">

    <Header/>
    <Routes>
      <Route index element={<CounterPage/>}/>
      <Route path= {"counter"} element={<CounterPage/>}/>
      <Route path= {"todo"} element={<TodoPage/>}/>


    </Routes>


      
    </div>
    </HashRouter>
  );
}

export default App;
