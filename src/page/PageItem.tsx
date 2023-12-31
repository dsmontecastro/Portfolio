import { PageRefs } from '../_types';
import { pages } from './pages/_';
import { Layout } from './Styles';

interface Props {
    id: number
    refs: PageRefs
}

export default function Page({ id, refs }: Props) {

    const key = 'pages-' + id;

    return (
        <section key={key} id={key}
            ref={(e) => refs.current[id] = e}
            className={`relative ${Layout.center} border-4 border-white `}
        > {pages[id].body} </section>
    );

}

