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
        <li key={key} id={key}
            ref={(e) => refs.current[id] = e}
            className={`border-4 border-white ${Layout.center}`}
        > {pages[id].body} </li>
    );

}

