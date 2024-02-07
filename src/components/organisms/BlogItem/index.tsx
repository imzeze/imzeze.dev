import Link from 'next/link';
import styles from './index.module.scss';
import { postModel } from '@/models/postModel';

interface BlogItemProps {
    post: postModel & {
        fileName: string;
    };
}

export default function BlogItem({ post }: BlogItemProps) {
    return (
        <Link href={`blog/${post.fileName}`}>
            <div className={styles.wrapper}>
                <h3>{post.title}</h3>
                <p className={styles.description}>{post.description}</p>
            </div>
        </Link>
    );
}
