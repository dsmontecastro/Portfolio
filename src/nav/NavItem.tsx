import { PageRefs } from '../_types';

import { Colors, Layout } from './Styles';

interface Props {
    id: number
    index: number
    refs: PageRefs
}


const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

export default function NavItem({ id, index, refs }: Props) {

    const itemKey = 'nav-item-' + id;

    function navToPage() {
        const ref = refs.current[id];
        ref?.scrollIntoView(scrollOptions);
    }

    return (

        <li id={itemKey} key={itemKey} className={`w-min ${Layout.col}`}>

            <div className={`flex-initial ${Layout.row}`}>

                <button onClick={() => navToPage()} className={`
                    w-[3vw] text-[2vw]/loose
                    aspect-square align-middle
                    flex-initial rounded-full
                    focus:outline-none
                    ${Layout.center} ${Colors.bg} 
                    ${id == index ? '' : Colors.bttnFocus}
                    ${id == index ? '' : Colors.bttnHover}
                    ${id == index ? Colors.bttnActive : Colors.bttnInactive}
                `}> ◉ </button>

            </div >
        </li >
    );

}