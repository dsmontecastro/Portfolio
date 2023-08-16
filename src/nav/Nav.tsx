import { PageRefs } from '../_types';
import { pageCount } from '../page/_';

import NavItem from './NavItem';
import { bgColor, textColor } from './colors';

interface Props {
    index: number
    pageRefs: PageRefs
}

export default function Nav({ index, pageRefs }: Props) {

    const last = pageCount - 1;

    const text = 'text-' + textColor;
    const bg = 'bg-' + bgColor;

    function makeNavItem(id: number) {

        const key = 'n-' + id;
        const isLast = id == last;

        return <NavItem key={key}
            id={id}
            index={index}
            refs={pageRefs}
            isLast={isLast}
        />
    }

    return (

        <div id='nav' className={`w-min h-full mx-5 flex flex-col`}>

            <header id='nav-head' className={`h-min my-3 text-4xl text-left ${text} flex-initial`}
            > Nav </header>

            <div id='nav-body' className='my-3 flex-grow flex flex-row'>

                <div id='nav-items' className='z-10 h-full flex flex-col'>
                    {Array(pageCount).fill(null).map((_, i) => makeNavItem(i))}
                </div>

                <div id='nav-progress' className={`w-3 my-2 -ml-3 -translate-x-16 ${bg}`} />

            </div>

        </div>

    );

}

