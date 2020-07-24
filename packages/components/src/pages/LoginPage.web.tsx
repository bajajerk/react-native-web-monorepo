import React from 'react';
import GoogleLogin from 'react-google-login';



const responseGoogle = (response) => {
    console.log(response);
}

export const LoginPage: React.FC = () => {
    return (
        <GoogleLogin
            clientId="694785323635-p5kot1gclqg89kljalkdcc3735fvkev4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
};
