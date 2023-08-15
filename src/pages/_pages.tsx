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
        const mb = `mb-${(id == count - 1) ? 0 : 5}`;
        return (
            <li
                key={id}
                id={idToPage(id)}
                ref={(e) => pageRefs.current[id] = e}
                className={`h-screen py-5 ${mb} bg-gray-500`}>
                <p className='text-9xl mx-20 text-white'> ITEM#{id + 1}</p>
                {body}
            </li>
        );
    }

    function onUpdate(values: positionValues) {
        const pos = values.top;
        let ind = Math.round(count * pos);
        if (ind >= count) { ind = count - 1; }
        setIndex(ind);
    }


    return (

        <div id='page-container' className='w-full h-full flex-1 bg-blue-500 overflow-none'>
            <Scrollbars onUpdate={(values) => onUpdate(values)}>
                <div id='pageRefs-list'> {pageBodies.map(pageToDiv)} </div>
            </Scrollbars>
        </div>

        // <>
        //     <Scrollbars
        //         id='page-container'
        //         className='w-full h-full flex-1 bg-blue-500 overflow-none'
        //         onUpdate={(values) => onUpdate(values)}
        //         autoHide={true}
        //         hideTracksWhenNotNeeded={true}
        //         renderTrackHorizontal={props => <div {...props} className='h-0 hidden track-horizontal' />}>

        //         <div id='pageRefs-list'> {pageBodies.map(pageToDiv)} </div>

        //     </Scrollbars>

        // </>

    );

}

