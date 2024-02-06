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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
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
