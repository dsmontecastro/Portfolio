import { PageRefs } from '../_types';
import { pageCount } from '../page/_';

import NavItem from './NavItem';

interface Props {
    index: number
    pageRefs: PageRefs
}

export default function Nav({ index, pageRefs }: Props) {

    function makeNavItem(id: number) {
        const isLast = id == pageCount - 1;
        const isActive = id == index;

        return <NavItem id={id}
            refs={pageRefs}
            isLast={isLast}
            isActive={isActive}
        />
    }

    return (

        <div id='nav' className={`w-min h-full mx-5 flex flex-col`}>

            <header id='nav-head' className='h-min my-3 text-4xl text-left flex-initial'
            > Nav </header>

            <div id='nav-body' className='my-3 flex-grow flex flex-row'>

                <ul id='nav-items' className='z-10 h-full flex flex-col'>
                    {Array(pageCount).fill(null).map((_, i) => makeNavItem(i))}
                </ul>

                <div id='nav-progress' className='w-3 my-2 -ml-2.5 bg-pink-600 -translate-x-16' />

            </div>

        </div>

    );

}

