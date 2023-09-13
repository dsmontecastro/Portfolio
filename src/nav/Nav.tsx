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
            last={isLast}
        />
    }

    return (

        <div id='nav' className={`w-min h-full bg-black bg-opacity-90 ${Layout.col}`}>

            <header id='nav-head'
                className={`h-[10%] pt-5 pb-2 text-center tracking-widest
                lg:text-4xl md:text-3xl sm:text-2xl max-lg:hidden
                flex-initial ${Layout.center} ${Layout.hide}`}
            > NAV </header>

            <div id='nav-body'
                className={`
                w-full mx-2 my-5 pr-4
                2xl:mx-0 2xl:my-12 2xl:pr-8
                flex-1 ${Layout.row}`}
            >

                <div id='nav-line'
                    className={`
                    w-4 my-2 z-80 translate-x-6
                    2xl:w-7 2xl:my-10 2xl:translate-x-11
                    flex-initial ${Colors.bg}`}
                />

                <div id='nav-items' className={`h-full -ml-0.5 flex-1 ${Layout.col}`}>
                    {Array(pageCount).fill(null).map((_, i) => makeNavItem(i))}
                </div>

            </div>

        </div>

    );

}

