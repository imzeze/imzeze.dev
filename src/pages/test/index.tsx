import { useEffect } from 'react';

export default async function Page() {
    const response = await fetch(
        'https://magicphoto.s3.ap-northeast-2.amazonaws.com/pictures/1000_1716768077_NGwUve/1000_1716768077_NGwUve.mp4',
    );
    const buffer = await response.arrayBuffer();
    const file = new File([buffer], '1000_1716768077_NGwUve.mp4', {
        type: 'video/mp4',
    });
    const files = [file];

    useEffect(() => {
        if (window && window.navigator) {
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
