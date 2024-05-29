import { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        if (window && window.navigator) {
            const btn = document.getElementById('test');
            btn?.addEventListener('click', () => {
                window.navigator.share({
                    title: 'MDN',
                    text: 'Learn web development on MDN!',
                    url: 'https://developer.mozilla.org',
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
