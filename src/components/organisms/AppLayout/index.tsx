import { Header } from '@/components/organisms';
import styles from './index.module.css';

type AppLayoutProps = {
    children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            <Header />
            <main className={styles.content}>{children}</main>
        </>
    );
}
