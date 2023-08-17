import { PageRefs } from '../_types';
import { pageCount } from '../page/pages/_';

import { Colors, Layout } from './Styles';
import NavItem from './NavItem';

interface Props {
    index: number
    pageRefs: PageRefs
}

export default function Nav({ index, pageRefs }: Props) {

    const last = pageCount - 1;

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

        <div id='nav' className={`w-28 h-full mx-[1%] ${Layout.col}`}>

            <header id='nav-head' className='h-min my-3 spac flex-initial text-4xl text-left tracking-widest indent-3'
            > NAV </header>

            <div id='nav-body' className={`my-3 flex-1 ${Layout.row}`}>

                <div id='nav-items' className={`z-10 w-[95%] h-full ${Layout.col}`}>
                    {Array(pageCount).fill(null).map((_, i) => makeNavItem(i))}
                </div>

                {/* <div id='nav-progress' className={`w-[10%] my-2 -ml-1 -translate-x-20 ${Colors.bg}`} /> */}
                {/* <div id='nav-progress' className={`w-[5%] my-2 -translate-x-24 ${Colors.bg}`} /> */}
                <div id='nav-progress' className={`w-3 my-2 -ml-4 -translate-x-20 ${Colors.bg}`} />

            </div>

            {/* <div id='nav-body' className={`my-3 flex-1 ${Layout.row}`}>

                <div id='nav-items' className={`z-10 h-full ${Layout.col}`}>
                    {Array(pageCount).fill(null).map((_, i) => makeNavItem(i))}
                </div>

                <div id='nav-progress' className={`w-3 my-2 -ml-1 -translate-x-20 ${Colors.bg}`} />

            </div> */}

        </div>

    );

}

