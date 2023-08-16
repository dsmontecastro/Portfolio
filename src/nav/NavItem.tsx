import { PageRefs } from '../_types';
import { pages } from '../page/_';

import { bgColor, inactiveColor } from './colors';

interface Props {
    id: number
    index: number
    refs: PageRefs
    isLast: boolean
}


const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

export default function NavItem({ id, index, refs, isLast }: Props) {

    const bg = 'bg-' + bgColor;
    const inactive = 'text-' + inactiveColor;

    const itemKey = 'nav-item-' + id;
    const gapKey = 'nav-gap-' + id;

    function navToPage() {
        const ref = refs.current[id];
        ref?.scrollIntoView(scrollOptions);
    }

    return (

        <li id={itemKey} key={itemKey} className={`${isLast ? 'flex-initial' : 'flex-1'} flex flex-col`}>

            <div className='flex-initial flex flex-row'>

                <button onClick={() => navToPage()}
                    className={`w-6 h-6 align-middle ml-0.5 rounded-full ${bg} text-sm ${id == index ? '' : inactive}`}
                > ◉ </button>

                <p className={`ml-3 -mt-0.5`}
                > {pages[id].name}:{id + 1} </p>

            </div >

            {!isLast && <div id={gapKey} className='flex-grow' />}

        </li >
    );

}