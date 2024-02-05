import styles from './index.module.scss';

interface BlogItemProps {
    title: string;
}

export default function BlogItem({ title }: BlogItemProps) {
    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
            <p className={styles.description}>간단소개글</p>
        </div>
    );
}
