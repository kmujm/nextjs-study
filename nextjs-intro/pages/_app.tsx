import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css"
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({Component,  pageProps}: AppProps) {
    return <>
    <Provider store={store}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </Provider>
    </>;
};