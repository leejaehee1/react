import { useRef } from "react";
import styles from "./Signin.module.css";
import { LoginReqType } from "../types";

interface SigninProps {
    login: (reqData: LoginReqType) => void;
}

// export default function Signin() {
const Signin: React.FC<SigninProps> = ({login}) => { 
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    return (
        <div className={styles.container}>
            <div className={styles.signin_container}>
                <div className={styles.signin_pt}>
                    <img 
                        src="/bg_signin2.png" 
                        alt="Signin" 
                        className={styles.signin_bg}
                    />
                </div>
                <div className={styles.signin_contents}>
                    <div className={styles.signin_title}>
                        J community
                    </div>
                    <div className={styles.signin_subtitle}>
                        Please Share Your Opinion
                    </div>
                    <div className={styles.signin_underline} />
                    <div className={styles.email_title}>
                        Email
                        <span className={styles.required}> *</span>
                    </div>
                    <div className={styles.input_area}>
                        <input 
                            type="text" 
                            placeholder="Email"
                            autoComplete="email"
                            name="email"
                            className={styles.input}
                            ref={emailRef}
                        />
                    </div>
                    <div className={styles.password_title}>
                        Password
                        <span className={styles.required}> *</span>
                    </div>
                    <div className={styles.input_area}>
                        <input 
                            type="password" 
                            placeholder="Password"
                            autoComplete="current-password"
                            // name="email"
                            className={styles.input}
                            ref={passwordRef}
                        />
                    </div>
                    <div className={styles.button_area}>
                        <button className={styles.button}
                            onClick={click}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    function click() {
        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
        login({email, password})
    }
}

export default Signin;