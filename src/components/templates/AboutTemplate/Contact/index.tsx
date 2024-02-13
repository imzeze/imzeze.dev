import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className={styles.wrapper}>
            <Link href="https://github.com/imzeze" target="_blank">
                <Image
                    src="/assets/github.png"
                    width={24}
                    height={24}
                    alt="github link"
                />
            </Link>
        </div>
    );
}
