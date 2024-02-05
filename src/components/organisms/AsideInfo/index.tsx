import styles from './index.module.scss';

interface AsideInfoProps {}

export default function AsideInfo({}: AsideInfoProps) {
    return (
        <aside>
            <ul className={styles.wrapper}>
                <li>샘플샘플</li>
                <li>플샘플샘플샘플</li>
                <li>도샘플샘</li>
                <li>도샘플샘</li>
                <li>도샘플샘</li>
                <li>도샘플샘</li>
                <li>도샘플샘</li>
            </ul>
        </aside>
    );
}
