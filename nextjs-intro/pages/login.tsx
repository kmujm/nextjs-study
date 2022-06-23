import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import ContentCommon from "../components/Common/ContentCommon"
import HeadTitle from "../components/Common/HeadTitle"
import LoginForm from "../components/Login/LoginForm";
import LoginHeader from "../components/Login/LoginHeader";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitOnClick = (e:any) => {
        console.log(email, password)
    }

    const router = useRouter();
    return (
        <>
        <div className="wrapper type_login">
            <HeadTitle title="로그인"/>
            {/* CONTENT */}
            <ContentCommon>
                {/* LoginHeader */}
                <LoginHeader/>
                {/* LoginFormArea */}
                <LoginForm onEmailChange={(e: any) => setEmail(e.target.value)} 
                    onPwdChange={(e: any) => setPassword(e.target.value)}/>
                <Button text="로그인" onClick={submitOnClick}/>
            </ContentCommon>
            
        </div>
        
        
        </>
    )
} 