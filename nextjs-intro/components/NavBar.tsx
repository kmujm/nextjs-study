import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();

    return (
    <nav className={styles.nav}>
        <Link href="/">
            <a className="hello" style={{color: router.pathname === "/" ? "red" : "blue"}} >Home</a>
        </Link>
        <Link href="/about">
            <a style={{color: router.pathname === "/about" ? "red" : "blue"}}>About</a>
        </Link>
    </nav>)
}