import "./Login.css";
import RegisterForm from "../components/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { loginPageActions } from "../store/ReduxStore/LoginPageSlice";

const Login = ()=>{
    const dispatch = useDispatch();

    const closeLoginHandler = ()=>{
        dispatch(loginPageActions.loginPageClose())
    }
    
    const login = useSelector(state=>{
       return state.login.show
    })

    return(
        <div className="login" onClick={closeLoginHandler}>
            <div className={login ? "login-container login-active" : "login-container"}>
                <i class="fas fa-times" onClick={closeLoginHandler}></i>
                <RegisterForm/>
            </div>
        </div>
    )
}
export default Login;