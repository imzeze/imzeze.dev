import type { AppProps } from 'next/app';
import '../globalStyles.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
