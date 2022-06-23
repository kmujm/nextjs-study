import NavBar from "./NavBar"
import Header from "./Header"

export default function Layout({children}: any) {
    return (<> 
        < NavBar />
        <Header/> 
        <div>
            {children}
        </div> 
    </>)
} 