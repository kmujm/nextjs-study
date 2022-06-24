import ContentCommon from "../components/Common/ContentCommon"
import HeadTitle from "../components/Common/HeadTitle"
import LoginForm from "../components/Login/LoginForm"

export default function Register() {
    return (
        <>
        <div className="wrapper">
            <HeadTitle title="등록"/>
        </div>
        <ContentCommon>
                {/* LoginFormArea */}
                <LoginForm/>
            </ContentCommon>
        
        </>
    )
} 