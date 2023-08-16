import { PageRefs } from '../_types';

import { pages } from './_';

interface Props {
    id: number
    refs: PageRefs
}

export default function Page({ id, refs }: Props) {

    const key = 'page-pages-' + id;

    return (
        <li key={key} id={key}
            ref={(e) => refs.current[id] = e}
            className='h-screen'
        > {pages[id].body} </li>
    );

}

