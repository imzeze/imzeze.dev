import type { AppProps } from 'next/app';
import '../styles/globalStyles.scss';
import { AppLayout } from '@/components/organisms';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    );
}
