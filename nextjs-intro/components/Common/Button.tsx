export default function Button({text, onClick} : any ) {
    return (
        <>
            <div className="common_btn_area type_align_center type_login">
              <a href="" className="common_btn type_primary" onClick={onClick}>{text}</a>
            </div>
            <style jsx>
                {`
                .common_btn_area {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: flex;
                }
                
                .common_btn_area.type_align_center {
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                       -moz-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                }
                
                .common_btn_area.type_align_left {
                    -webkit-box-pack: start;
                    -webkit-justify-content: start;
                       -moz-box-pack: start;
                        -ms-flex-pack: start;
                            justify-content: start;
                }
                
                .common_btn_area.type_align_right {
                    -webkit-box-pack: end;
                    -webkit-justify-content: end;
                       -moz-box-pack: end;
                        -ms-flex-pack: end;
                            justify-content: end;
                }
                
                .common_btn {
                    display: -webkit-inline-box;
                    display: -webkit-inline-flex;
                    display: -moz-inline-box;
                    display: -ms-inline-flexbox;
                    display: inline-flex;
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
                    width: 100px;
                    height: 36px;
                    font-size: 1.3rem;
                    line-height: 3.6rem;
                    border: 1px solid;
                    -webkit-border-radius: 4px;
                       -moz-border-radius: 4px;
                            border-radius: 4px;
                    -webkit-box-sizing: border-box;
                       -moz-box-sizing: border-box;
                            box-sizing: border-box;
                    font-size: 1.6rem;
                    font-weight: bold;
                    vertical-align: top;
                }
                `}
            </style>
        </>
    )

}