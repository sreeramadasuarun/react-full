import React, { useState } from 'react'
// import ReactDOM from "react-dom";
import * as Components from "./Components";
import "../login/signupcss.css"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../login/auth'



const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [signIn, toggle] = React.useState(true);

    // const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const handlesubmit = (e) => {
        e.preventDefault()

        login(email, password);


    }

    return (
        <div className="form_slider" >

            <Components.Container>
                <Components.SignUpContainer signingIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type="text" placeholder="Name" />
                        <Components.Input type="email" placeholder="Email" />
                        <Components.Input type="password" placeholder="Password" />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>


                <Components.SignInContainer signingIn={signIn} onSubmit={handlesubmit}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button >Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>



                <Components.OverlayContainer signingIn={signIn}>
                    <Components.Overlay signingIn={signIn}>
                        <Components.LeftOverlayPanel signingIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>

                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>

                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signingIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start journey with us
                            </Components.Paragraph>

                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>

                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>

    );
}



export default Login