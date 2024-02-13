import Image from 'next/image';
import styles from './index.module.scss';

export default function Contact() {
    return (
        <div className={styles.wrapper}>
            <Image
                src="/assets/github.png"
                width={24}
                height={24}
                alt="github link"
            />
            <Image
                src="/assets/email.png"
                width={24}
                height={24}
                alt="email address"
            />
        </div>
    );
}
