


import { HashRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Adoptez from "./pages/adoptez/adoptez";
import CounterPage from "./pages/counter-page/counter_page";
import Jsonplaceholder from "./pages/json-place-holder/json_place_holder";
import JsonplaceholderUser from "./pages/json-place-holder/json_place_holder _user";
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
      <Route path= {"jsonplaceholder"} element={<Jsonplaceholder/>}/>
      <Route path= {"jsonplaceholder/user/:userId"} element={<JsonplaceholderUser/>}/>
      <Route path= {"adoptez"} element={<Adoptez/>}/>



    </Routes>

    
      
    </div>
    </HashRouter>
  );
}

export default App;
