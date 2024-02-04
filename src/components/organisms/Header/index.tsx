import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <nav>
                <ul className={styles.navWrapper}>
                    <li>
                        <Link href="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link href="/project">PROJECT</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/resume">RESUME</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
