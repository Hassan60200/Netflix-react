import React, {useState} from "react";
import "./login.css";
import {
    LoginSocialGoogle,
    LoginSocialFacebook,
    LoginSocialGithub,
} from 'reactjs-social-login'

// CUSTOMIZE ANY UI BUTTON
import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
} from 'react-social-login-buttons'

const LoginPage = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState(null);
    const [picture, setPicture] = useState('');
    if (login === true){
        console.log("true");
        localStorage.setItem('IsLogged', true);
    }else{
        localStorage.removeItem('IsLogged');
    }


    return (
            <div className="login-page">
                {data ?
                    <div>
                        <h1>{data.name}</h1>
                        <img src={picture} alt=""/>
                    </div> :
                    <LoginSocialFacebook
                        appId={process.env.REACT_APP_FB_APP_ID_KEY}
                        isOnlyGetCode={true}
                        onResolve={(response) => {
                            setData(response.data);
                            setLogin(true)
                            setPicture(response.data.picture.data.url)
                        }}
                        onReject={(response) => {
                            console.log(response);
                        }}
                    >
                        <FacebookLoginButton/>
                    </LoginSocialFacebook>
                }
            </div>
    );
};

export default LoginPage;
