import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <nav className={styles.navWrapper}>
                <ul>
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
                        <div className={styles.menu}>
                            RESUME
                            <Image
                                src="/icons/download.png"
                                alt="이력서 다운로드"
                                width="12"
                                height="12"
                                style={{ marginLeft: 4 }}
                            />
                        </div>
                    </li>
                </ul>
            </nav>
            <div className={styles.hamburger}>햄버거</div>
        </header>
    );
}
