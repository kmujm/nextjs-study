export default function HeadTitle() {
    return (
        <>
        <header className="header" role="banner">헤더</header>
        <style jsx>{`
            .header {
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
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                   -moz-box-pack: justify;
                    -ms-flex-pack: justify;
                        justify-content: space-between;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                z-index: 5000;
                height: 70px;
                padding: 0 30px;
                background-color: #fff;
                -webkit-box-shadow: 0 0 35px rgba(26, 26, 27, 0.05);
                   -moz-box-shadow: 0 0 35px rgba(26, 26, 27, 0.05);
                        box-shadow: 0 0 35px rgba(26, 26, 27, 0.05);
            }   
        `}</style>
        </>
        
    )
}