import styles from './index.module.scss';

interface ProjectItemProps {
    title: string;
}

export default function ProjectItem({ title }: ProjectItemProps) {
    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
        </div>
    );
}
