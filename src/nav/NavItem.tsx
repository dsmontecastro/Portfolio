import { PageRefs } from '../_types';
import { pages } from '../page/pages/_';

import { Colors, Layout } from './Styles';

interface Props {
    id: number
    index: number
    refs: PageRefs
    last: boolean
}


const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

export default function NavItem({ id, index, refs, last }: Props) {

    const itemKey = 'nav-item-' + id;
    const gapKey = 'nav-gap-' + id;

    function navToPage() {
        const ref = refs.current[id];
        ref?.scrollIntoView(scrollOptions);
    }

    return (

        <li id={itemKey} key={itemKey} className={`w-min ${last ? 'flex-initial' : 'flex-1'} ${Layout.col}`}>

            <div className={`flex-initial ${Layout.row}`}>

                <button onClick={() => navToPage()} className={`
                    w-7 h-7 text-lg align-middle
                    2xl:w-14 2xl:h-14 2xl:text-2xl 2xl:mr-3
                    ml-1 flex-initial rounded-full
                    focus:outline-none
                    ${Layout.center} ${Colors.bg} 
                    ${id == index ? '' : Colors.bttnFocus}
                    ${id == index ? '' : Colors.bttnHover}
                    ${id == index ? Colors.bttnActive : Colors.bttnInactive}
                `}> ◉ </button>

                <p className={`ml-3 -mt-0.5 break-normal
                    max-lg:hidden lg:text-xs xl:text-base
                    flex-grow ${Layout.center} ${Layout.hide}
                    ${id == index ? Colors.textActive : Colors.textInactive}
                `}> {pages[id].name} </p>

            </div >

            {!last && <div id={gapKey} className='flex-1' />}

        </li >
    );

}