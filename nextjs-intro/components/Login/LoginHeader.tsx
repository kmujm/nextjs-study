export default function LoginHeader() {
    return (
        <> 
        <div className = "login_header_area" > 
            <h1 className="logo_area">
                <a href="/login" className="service_title">
                    <div className="icon_wrapper">
                        <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="85"
                            height="22"
                            viewBox="0 0 100 26">
                            <path
                                d="M0 .2v5.5h7.2v20.1h6.7V5.7h7.2V.2H0zm40.8 0H28.7l-4.5 4.5v16.7c0 2.7 1.8 4.4 4.6 4.4H41l4.5-4.5V4.6C45.4 1.9 43.7.2 40.8.2zm-10 20.1V5.7h7.9v14.6h-7.9zm64.6-9.9h-8.8V5.7h13.1V.2H84.4l-4.5 4.5v6.4c0 2.7 1.8 4.4 4.6 4.4h8.8v4.7h-13v5.5h15.2l4.5-4.5v-6.5c0-2.6-1.7-4.3-4.6-4.3zM76.2.2h-5.9l-7.6 11-7.8-11h-5.8v25.6h6.6V13.9l5.3 6.4h3.3l5.3-6.7v12.3h6.6V.2z"/>
                        </svg>
                        <span className="hide">TOMS</span>
                        <span className="label">ADMIN</span>
                    </div>
                </a>
            </h1>
        </div>
        <style jsx>
            {`
            .login_header_area {
                margin: -24px -24px 0;
                -webkit-border-radius: 6px 6px 0 0;
                   -moz-border-radius: 6px 6px 0 0;
                        border-radius: 6px 6px 0 0;
                background-color: #3c3c3d;
            }
            .login_header_area .logo_area {
                height: 70px;
                margin: 0 24px;
            }
            .login_header_area .logo_area .service_title {
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                   -moz-box-align: center;
                    -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                   -moz-box-pack: center;
                    -ms-flex-pack: center;
                        justify-content: center;
                height: 100%;
            }
            .login_header_area .logo_area .service_title .icon {
                fill: #fff;
            }
            .login_header_area .logo_area .service_title .label {
                font-size: 1.1rem;
                font-weight: 800;
                color: #7a7a7b;
                line-height: 1.3rem;
            }
            `}
        </style>
        </>
    )
}