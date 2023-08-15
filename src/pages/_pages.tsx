import { PageRefs, SetNumber } from '../_types';

import { pageBodies } from '../pages/_';
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';

interface NavProps {
    pageRefs: PageRefs
    setIndex: SetNumber
}

export default function Pages({ pageRefs, setIndex }: NavProps) {

    const count = pageBodies.length;

    /* ----------------------------------------- List-Element Builder ----------------------------------------- */

    function idToPage(id: number) {
        return `page-${id}`;
    }

    function pageToDiv(body: JSX.Element, id: number) {
        // const mb = `mb-${(id == count - 1) ? 0 : 5}`;
        return (
            <li
                key={id}
                id={idToPage(id)}
                ref={(e) => pageRefs.current[id] = e}
                className='h-screen bg-gray-500'
            >
                {/* className={`h-screen ${mb} bg-gray-500`}> */}
                {body}
            </li>
        );
    }

    function onUpdate(values: positionValues) {
        const pos = values.top;
        let ind = Math.floor(count * pos);
        if (ind >= count) { ind = count - 1; }
        setIndex(ind);
    }


    return (

        <div id='pages' className='w-full h-full flex-1 bg-blue-500 overflow-none'>
            <Scrollbars onUpdate={(values) => onUpdate(values)}>
                <div id='pages-list'> {pageBodies.map(pageToDiv)} </div>
            </Scrollbars>
        </div>

    );

}

