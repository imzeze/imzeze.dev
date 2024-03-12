import Link from 'next/link';
import styles from './BlogItem.module.scss';
import { postModel } from '@/models/postModel';
import { TAG } from '@/constants/tag';

interface BlogItemProps {
    post: postModel & {
        fileName: string;
    };
}

export default function BlogItem({ post }: BlogItemProps) {
    return (
        <Link href={`blog/${post.fileName}`}>
            <div className={styles.wrapper}>
                <h2>{post.title}</h2>
                <p className={styles.description}>{post.description}</p>
                {post.tag.map((key) => (
                    <span key={key}># {TAG[key]}</span>
                ))}
            </div>
        </Link>
    );
}
