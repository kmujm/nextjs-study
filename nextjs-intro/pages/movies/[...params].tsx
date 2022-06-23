import { useRouter } from "next/router"

export default function Detail({params}: any) {
    const router = useRouter();
    const [title, id] = params || [];
    return (
    <>
        <h4>{title}</h4>
    </>
    )
}

export function getServerSideProps({params: {params}} : any) { 
    return {
        props: {
            params
        },
    }
}