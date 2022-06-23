import { useRouter } from "next/router";
import ContentCommon from "../components/Common/ContentCommon"
import HeadTitle from "../components/Common/HeadTitle"
import LoginForm from "../components/Login/LoginForm";
import LoginHeader from "../components/Login/LoginHeader";

export default function Login() {
    const router = useRouter();
    
    return (
        <>
        <div className="wrapper type_login">
            <HeadTitle title="로그인"/>
            {/* CONTENT */}
            <ContentCommon>
                {/* LoginHeader */}
                <LoginHeader/>
                <LoginForm/>
            </ContentCommon>
            
        </div>
        
        
        </>
    )
} 