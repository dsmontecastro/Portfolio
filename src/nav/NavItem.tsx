import { PageRefs } from '../_types';

import { pages } from '../page/_';

interface Props {
    id: number
    refs: PageRefs
    isLast: boolean
    isActive: boolean
}

const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };


export default function NavItem({ id, refs, isLast, isActive }: Props) {

    const baseColor = 'white';
    const bgColor = 'pink-600';


    const text = 'text-' + (isActive ? baseColor : bgColor);
    const bg = 'bg-' + bgColor;

    function idToNav(id: number) {
        return `nav-item-${id}`;
    }

    function idToGap(id: number) {
        return `nav-gap-${id}`;
    }

    function navToPage() {
        const ref = refs.current[id];
        ref?.scrollIntoView(scrollOptions);
    }

    return (
        <div key={id}
            id={idToNav(id)}
            className={`${isLast ? 'flex-initial' : 'flex-1'} flex flex-col`}
        >

            <div className='flex-initial flex flex-row'>

                <button onClick={() => navToPage()}
                    className={`z-10 w-5 h-5 ml-0.5 rounded-full text-sm text-center align-middle ${text} ${bg}`}
                > ◉ </button>

                <p className='ml-3 '> {pages[id].name}:{id + 1} </p>

            </div >

            {!isLast && <div id={idToGap(id)} className='flex-grow' />}

        </div >
    );

}