import { BlogItem } from '@/components/organisms';
import styles from './index.module.scss';
import { BlogPageProps } from '@/pages/blog';
import { TAG } from '@/contants/tag';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogListTemplate({ posts }: BlogPageProps) {
    const [filterList, setFilterList] = useState(posts);

    const onClickTag = (key: string) => {
        setFilterList(posts.filter((post) => post.tag.includes(key)));
    };

    return (
        <div>
            <h1>블로그</h1>
            <div className={styles.wrapper}>
                <div className={styles.itemWrapper}>
                    {filterList.map((post) => (
                        <BlogItem key={post.fileName} post={post} />
                    ))}
                    <div className={styles.tilLink}>
                        <Link href="https://github.com/imzeze/TIL/tree/master">
                            <h2>TIL</h2>
                            <Image
                                src="/icons/linkto.png"
                                width="24"
                                height="24"
                                alt="linkToTIL"
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.asideWrapper}>
                    <aside>
                        <ul>
                            {Object.keys(TAG).map((key) => (
                                <li key={key} onClick={() => onClickTag(key)}>
                                    {TAG[key]}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
}
