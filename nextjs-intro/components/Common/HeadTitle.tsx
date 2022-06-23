import Head from "next/head";
export default function HeadTitle({title}: any) {
    return (
        <>
        <Head>
            <title>어드민 - {title}</title>
        </Head>
        </>
    )
}