import { PageRefs } from '../_types';
import { pages } from '../page/pages/_';

import { Colors, Layout } from './Styles';

interface Props {
    id: number
    index: number
    refs: PageRefs
    isLast: boolean
}


const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

export default function NavItem({ id, index, refs, isLast }: Props) {

    const itemKey = 'nav-item-' + id;
    const gapKey = 'nav-gap-' + id;

    function navToPage() {
        const ref = refs.current[id];
        ref?.scrollIntoView(scrollOptions);
    }

    return (

        <li id={itemKey} key={itemKey} className={`w-full ${isLast ? 'flex-initial' : 'flex-1'} ${Layout.col}`}>

            <div className={`flex-initial ${Layout.row}`}>

                <button onClick={() => navToPage()}
                    className={`w-6 h-6 ml-1 flex-initial rounded-full text-sm ${Layout.center}
                    ${Colors.bg} ${id == index ? Colors.bttnActive : Colors.bttnInactive}`}
                > ◉ </button>

                <p className={`ml-3 -mt-0.5 flex-1 ${id == index ? Colors.textActive : Colors.textInactive}`}>
                    {pages[id].name}
                </p>

            </div >

            {!isLast && <div id={gapKey} className='flex-1' />}

        </li >
    );

}