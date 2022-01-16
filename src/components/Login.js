import "./Login.css";
import RegisterForm from "../components/RegisterForm";

const Login = ({login,setLogin})=>{

   const closeLoginHandler = ()=>{
    setLogin(false)
    }

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