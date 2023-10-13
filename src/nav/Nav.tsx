import { PageRefs } from '../_types';
import { pageCount } from '../page/pages/_';

import { Colors, Layout } from './Styles';
import NavItem from './NavItem';

interface Props {
    index: number
    pageRefs: PageRefs
}

export default function Nav({ index, pageRefs }: Props) {

    function makeNavItem(id: number) {

        const key = 'n-' + id;

        return <NavItem key={key}
            id={id}
            index={index}
            refs={pageRefs}
        />
    }

    return (

        <div id='nav' className={`w-[10%] h-full bg-black bg-opacity-90 flex-col ${Layout.center}`}>

            <header id='nav-head'
                className={`w-full h-[10%] mb-[5%] pt-5 pb-2 text-center tracking-widest
                lg:text-4xl md:text-3xl sm:text-2xl max-lg:hidden
                flex-initial ${Layout.center} ${Layout.hide}`}
            > NAV </header>

            <div id='nav-items' className={`w-[90%] h-[90%] mx-auto my-[5%] relative justify-between ${Layout.colC}`}>

                {Array(pageCount).fill(null).map((_, i) => makeNavItem(i))}

                <svg className={`my-[5%] absolute z-0 ${Layout.fill} ${Colors.stroke}`}>
                    <line x1='50%' y1='0%' x2='50%' y2='100%' className='stroke-[1vw]' />
                </svg>

            </div>

        </div>

    );

}

