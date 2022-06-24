export default function ContentCommon({children} : any) {
    return (
        <> 
        <div className = "content" role = "main" > 
            <div className="content_inner">
                <div className="common_box">
                    {children}
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .content {
                    margin-left: 0;
                    padding-top: 70px;
                }
                .content .content_inner {
                    margin: 0 auto;
                    padding: 30px;
                }
                .common_box {
                    padding: 24px;
                    -webkit-border-radius: 6px;
                    -moz-border-radius: 6px;
                            border-radius: 6px;
                    background-color: #fff;
                    -webkit-box-shadow: 0 0 35px rgba(26, 26, 27, 0.05);
                    -moz-box-shadow: 0 0 35px rgba(26, 26, 27, 0.05);
                            box-shadow: 0 0 35px rgba(26, 26, 27, 0.05);
                }
            `} 
        </style>
        </>
    )
}