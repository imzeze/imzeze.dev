import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    const onClickHamburger = () => {
        setOpenNav(!openNav);
    };

    return (
        <header className={styles.wrapper}>
            <nav className={openNav ? styles.leftNav : styles.navWrapper}>
                <ul onClick={() => setOpenNav(false)}>
                    <li>
                        <Link href="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link
                            href="https://first-death-192.notion.site/0d0e52bbcd1f42c697cb5a91ad1f3bde?pvs=74"
                            target="_blank"
                        >
                            PROJECT
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <div className={styles.menu}>
                            <a
                                href="/assets/resume.pdf"
                                download="김지혜_이력서.pdf"
                            >
                                RESUME
                                <Image
                                    src="/icons/download.png"
                                    alt="이력서 다운로드"
                                    width="12"
                                    height="12"
                                    style={{ marginLeft: 4 }}
                                />
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div
                className={`${styles.hamburger} ${
                    openNav ? styles.active : ''
                }`}
                onClick={onClickHamburger}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}
