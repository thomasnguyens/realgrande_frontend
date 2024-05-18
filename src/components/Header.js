    import { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    const Header = () => {
        let [loggedIn,setLoggedIn] = useState(sessionStorage.getItem("rloggedin"));
        let navigate = useNavigate();

        let logoutHandler = () =>{
            console.log("logging out");
            sessionStorage.clear();
            navigate('/')        
        }
        let loginHandler = () =>{ 
            navigate('/login')
        }
        let signupHandler = () => {
            navigate('/signup');
        }

        return ( 
            <div className = "row bg-warning d-flex align-items center">
                <div className="col-sm-3 my-2">
                    <Link to="/"><img className="w-25" src="/imgs/reallogo.jpg" alt="logo.jpg"/></Link>
                </div>
                <div className="col-sm-5">
                    <h3><b>Get your dream house with us!</b></h3>
                </div>
                <div className="col-sm-4">
                    {
                        ( sessionStorage.getItem("rloggedin")=="true")
                        ?
                        <button onClick={logoutHandler} className="btn btn-primary"> Logout </button>
                        :
                        <>
                        <button onClick={loginHandler}  className="btn btn-primary"> Login </button>
                        <button onClick={signupHandler}  className="btn btn-secondary">Signup</button>
                        </>
                    }

                            </div>
            </div>
        );
    }
    
    export default Header;