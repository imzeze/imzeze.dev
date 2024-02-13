import Intro from './Intro';
import Info from './Info';
import Contact from './Contact';

export default function AboutTemplate() {
    return (
        <>
            <section>
                <Intro />
            </section>
            <section>
                <Contact />
            </section>
            <section>
                <Info />
            </section>
        </>
    );
}
