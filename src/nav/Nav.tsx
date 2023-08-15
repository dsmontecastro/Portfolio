import { PageRefs } from '../_types';

import { pageNames } from '../pages/_';


interface NavProps {
    width: string
    index: number
    pageRefs: PageRefs
}

export default function Nav({ width, index, pageRefs }: NavProps) {

    const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

    const baseColor = 'white';
    const bgColor = 'pink-600';

    /* ----------------------------------------- List-Element Builder ----------------------------------------- */

    function idToNav(id: number) {
        return `nav-${id}`;
    }

    function navToPage(id: number) {
        const page = pageRefs.current[id];
        page?.scrollIntoView(scrollOptions);
    }

    function nameToNav(name: string, id: number) {

        const text = 'text-' + ((id == index) ? baseColor : bgColor);
        const bg = 'bg-' + bgColor;

        return (
            <div key={id} id={idToNav(id)}>
                <div className='flex flex-row'>
                    <button
                        onClick={() => navToPage(id)}
                        className={`z-10 w-5 h-5 ml-0.5 rounded-full text-sm text-center align-middle ${text} ${bg}`}
                    > ◉ </button>
                    <p className='ml-3 '> {name}:{id + 1} </p>
                </div >
            </div >
        );
    }

    return (

        <div id='nav' className={`${width} h-full`}>

            <div id='nav-body' className='h-screen ml-5'>

                <header id='nav-head' className='h-10 mt-5 text-4xl text-left'> Nav </header>

                <div
                    id='nav-body'
                    className='mt-7 flex-1 flex flex-col'
                >

                    <ul id='nav-items' className='z-10 flex flex-col space-y-11'>
                        {pageNames.map(nameToNav)}
                    </ul>

                    <div id='nav-progress' className='w-3 h-5/6 mt-0.5 ml-1.5 flex-grow absolute flex flex-col bg-pink-600'>

                        {/* <div id='nav-bar' className={'w-3 mt-14 flex-grow absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600'}>
X
</div> */}

                    </div>

                </div>

            </div>

        </div>

    );

}

