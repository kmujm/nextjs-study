import axios from "axios";
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import Button from "../Common/Button";

export default function LoginForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value, 
        });       
    }

    const submitOnClick = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/auth/login", 
                JSON.stringify({username: form.email, password: form.password}), {
                    headers: {
                        "Content-Type": 'application/json',
                        withCredentials: true, 
                    }
            })
            if(response.status === 200) {
                console.log(response)
                console.log(response.data.accessToken)
                // dispatch(form.email, response.data.accessToken)
            }
        } catch (error: any) {
            // console.log(error)
            if(error.response.status === 401) {
                alert('로그인 실패')
            }
            else if (error.response.status === 400) {
                alert("필수 Parameter가 전달되지 않음")
            } else {
                //
            }
        }
    }


    return (
        <>
        <div className="login_form_area">
              <div className="input_area">
                <label htmlFor="user_id" className="input_label">아이디</label>
                <input type="text" name="email" className="input_text" id="user_id" onChange={onChange} placeholder="아이디를 입력하세요" />
              </div>
              <div className="input_area">
                <label htmlFor="user_password" className="input_label">비밀번호</label>
                <input type="password" name="password" className="input_text" id="user_password" onChange={onChange} placeholder="비밀번호를 입력하세요" />
                <a href="" className="link_find_password">비밀번호를 잊어 버렸습니까?</a>
              </div>
              <div className="input_area">
                <input type="checkbox" className="input_checkbox" id="saveid" />
                <label htmlFor="saveid" className="input_label">로그인 상태 유지하기</label>
              </div>
            </div>
            <Button onClick={submitOnClick} text="로그인"/>
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