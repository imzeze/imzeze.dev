import styles from './index.module.scss';

interface ProjectListItemProps {
    title: string;
}

export default function ProjectListItem({ title }: ProjectListItemProps) {
    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
        </div>
    );
}
