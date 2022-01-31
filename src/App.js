import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Login from "./components/Login";
import Appliances from "./pages/Appliances";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import Home from './pages/Home';
import Homes from "./pages/Homes";
import Mobile from "./pages/Mobile";
import Offers from "./pages/Offers";
import ViewDetails from "./pages/ViewDetails";
import Wishlist from "./pages/Wishlist";

function App() {

  const login = useSelector((state)=>{
    return state.login.show
  })


  return (
    <div className="App">

        {login && <Login/>}
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path="/offers" component={Offers}/>
                <Route path="/mobile" component={Mobile}/>
                <Route path="/fashion" component={Fashion}/>
                <Route path="/electronics" component={Electronics}/>
                <Route path="/appliances" component={Appliances}/>
                <Route path="/homes" component={Homes}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/viewdetails" component={ViewDetails}/>
                <Route path="/wishlist" component={Wishlist}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
