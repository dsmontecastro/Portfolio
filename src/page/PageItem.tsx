import { PageRefs } from '../_types';

import { pages } from './_';

interface Props {
    id: number
    refs: PageRefs
}

export default function Page({ id, refs }: Props) {

    function idToPage(id: number) {
        return `page-pages-${id}`;
    }

    return (
        <li
            key={id}
            id={idToPage(id)}
            ref={(e) => refs.current[id] = e}
            className='h-screen bg-gray-500'
        > {pages[id].body} </li>
    );

}

