import { Header, Footer } from '@/components/organisms';
import styles from './index.module.scss';
import Head from 'next/head';

type AppLayoutProps = {
    children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.css"
                    integrity="sha512-twSIkcOWTg8pO2szOkSwXeumnI79JQ0zVRavBB5cdJvhVFhReF9fBlyFM380P6vKIQ4mlD80EPtuZdSPpqYDgQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>김지혜 포트폴리오</title>
            </Head>
            <Header />
            <main>
                <div className={styles.wrapper}>
                    <div className={styles.content}>{children}</div>
                </div>
            </main>
            <Footer />
        </>
    );
}
