import styles from './index.module.scss';

interface AsideInfoProps {}

export default function AsideInfo({}: AsideInfoProps) {
    return (
        <aside>
            <ul className={styles.wrapper}>
                <li>샘플</li>
            </ul>
        </aside>
    );
}
