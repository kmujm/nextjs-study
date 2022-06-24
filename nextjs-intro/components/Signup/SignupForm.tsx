import axios from "axios";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react"
import Button from "../Common/Button";

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submitOnClick = async (e: SyntheticEvent) => {
        e.preventDefault();
        let data = {
            "username" : email,
            "password": password
        }

        try {
            const response = await axios.post("http://localhost:3000/auth/signup", JSON.stringify(data), {
                headers: {
                    "Content-Type": 'application/json',
                    withCredentials: true, 
                }
            })
            console.log(JSON.stringify(response))
        } catch (error: any) {
            // console.log(error)
            console.log(error.response.status)
        }
    }


    return (
        <>
        <div className="login_form_area">
              <div className="input_area">
                <label htmlFor="user_id" className="input_label">아이디</label>
                <input type="text" className="input_text" id="user_id" onChange={(e: any) => setEmail(e.target.value)} placeholder="아이디를 입력하세요" />
              </div>
              <div className="input_area">
                <label htmlFor="user_password" className="input_label">비밀번호</label>
                <input type="password" className="input_text" id="user_password" onChange={(e: any) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요" />
                <a href="" className="link_find_password">비밀번호를 잊어 버렸습니까?</a>
              </div>
              <div className="input_area">
                <input type="checkbox" className="input_checkbox" id="saveid" />
                <label htmlFor="saveid" className="input_label">로그인 상태 유지하기</label>
              </div>
            </div>
            <Button onClick={submitOnClick} text="회원가입"/>
            <style jsx>
                {`
                .login_form_area {
                    padding: 24px 0;
                }
                .login_form_area .input_area {
                    display: block;
                }
                .login_form_area .input_area + .input_area {
                    margin-top: 24px;
                }
                .login_form_area .input_label {
                    display: block;
                    margin-bottom: 8px;
                    font-size: 1.4rem;
                    font-weight: 600;
                }
                .login_form_area .input_text {
                    width: 100%;
                    height: 40px;
                }
                .login_form_area .link_find_password {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 1.2rem;
                    color: #8b8b8c;
                }
                .login_form_area .input_checkbox {
                    margin-top: 7px;
                }
                .login_form_area .input_checkbox + .input_label {
                    display: inline-block;
                    vertical-align: top;
                    margin-bottom: 0;
                }
                `}
            </style>
        </>
    )
}