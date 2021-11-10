import React from "react";

import { GoogleLogin } from 'react-google-login';

export class Login extends React.Component{
    responseGoogle  =(googleResp)=>{
        console.log(googleResp);
    }
    render(){
        return(
            <GoogleLogin
                clientId="265294442578-ng7l9bemua2f1415j4782mdsadal2n8c.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}
