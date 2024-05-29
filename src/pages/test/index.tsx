import { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        const files: Array<File> = [];
        const fetchFile = async () => {
            const response = await fetch(
                'https://imzeze-dev.vercel.app/_next/image?url=%2Ficons%2Flinkto.png&w=48&q=75',
            );
            const buffer = await response.arrayBuffer();
            const file = new File([buffer], 'test.png', {
                type: 'image/jpg',
            });

            files.push(file);
        };

        fetchFile();

        if (files.length > 0 && window && window.navigator) {
            const btn = document.getElementById('test');
            btn?.addEventListener('click', () => {
                window.navigator.share({
                    files,
                });
            });
        }
    }, []);

    return (
        <div>
            <button id="test">123</button>
        </div>
    );
}
