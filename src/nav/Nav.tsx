import { PageRefs } from '../_types';

import { pageNames } from '../pages/_';


interface NavProps {
    index: number
    pageRefs: PageRefs
}

export default function Nav({ index, pageRefs }: NavProps) {

    const count = pageNames.length;

    const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

    const baseColor = 'white';
    const bgColor = 'pink-600';

    /* ----------------------------------------- List-Element Builder ----------------------------------------- */

    function idToNav(id: number) {
        return `nav-${id}`;
    }

    function idToGap(id: number) {
        return `gap-${id}`;
    }

    function navToPage(id: number) {
        const page = pageRefs.current[id];
        page?.scrollIntoView(scrollOptions);
    }

    function nameToNav(name: string, id: number) {

        const text = 'text-' + ((id == index) ? baseColor : bgColor);
        const bg = 'bg-' + bgColor;

        const isLast = id == count - 1;

        return (
            <div key={id}
                id={idToNav(id)}
                className={`${isLast ? 'flex-initial' : 'flex-1'} flex flex-col`}
            >

                <div className='flex-initial flex flex-row'>
                    <button
                        onClick={() => navToPage(id)}
                        className={`z-10 w-5 h-5 ml-0.5 rounded-full text-sm text-center align-middle ${text} ${bg}`}
                    > ◉ </button>
                    <p className='ml-3 '> {name}:{id + 1} </p>
                </div >

                {!isLast && <div id={idToGap(id)} className='flex-grow' />}

            </div >
        );
    }

    return (

        <div id='nav' className={`w-min h-full`}>

            <div id='nav-body' className='h-[100%] mx-5 flex flex-col'>

                <header id='nav-head' className='h-min my-3 text-4xl text-left flex-initial'>
                    Nav
                </header>

                <div id='nav-elements' className='my-3 flex-grow flex flex-row'>

                    <ul id='nav-items' className='z-10 h-full flex flex-col'>
                        {pageNames.map(nameToNav)}
                    </ul>

                    <div id='nav-progress' className='w-3 my-2 -ml-0.5 bg-pink-600 -translate-x-16' />

                </div>

            </div>

        </div>

    );

}

