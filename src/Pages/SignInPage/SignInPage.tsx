import React, { useState } from "react";
import "./SignInPage.css";

import { GoogleLogin } from "react-google-login";
import Axios from "axios";

const SignInPage: React.FC = () => {
  const [channelName, setChannelName] = useState<string>("");

  const responseGoogle = (res: any) => {
    console.log(res);

    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    const imageUrl = res.profileObj.imageUrl;

    Axios.post("http://localhost:3001/signin", {
      name: name,
      email: email,
      googleId: googleId,
      channelName: channelName,
      imageUrl: imageUrl,
    }).then((response) => {
      console.log("success");
    });
  };

  return (
    <div className="SignInPage">
      <div className="Container">
        <div className="top">
          <h1>Sign In With Google</h1>
        </div>
        <div className="body">
          <input
            type="text"
            placeholder="Channel Name..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setChannelName(event.target.value);
            }}
          />
          <GoogleLogin
            clientId="31781579272-r0t99j48ttam5dbkc7b0olc6s4beq86m.apps.googleusercontent.com"
            buttonText="SignIn"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
