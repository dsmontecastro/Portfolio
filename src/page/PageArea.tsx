
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';

import { PageRefs, SetNumber } from '../_types';
import { pageCount } from './_';

import Page from './PageItem';

interface Props {
    pageRefs: PageRefs
    setIndex: SetNumber
}

// const pageDivide = 0.25; // Point of a Page where Index changes
// const pageDivide = 1.025;    

export default function PageArea({ pageRefs, setIndex }: Props) {

    function makePage(id: number) {
        return <Page key={`p-${id}`} id={id} refs={pageRefs} />
    }

    function onUpdate(values: positionValues) {
        const per = values.top;             // % of ScrollHeight
        const pos = (pageCount - 1) * per;  // Position based on PageCount
        setIndex(Math.round(pos));          // Set Index as Integer
    }

    return (

        <Scrollbars id='page-area'
            onUpdate={(values) => onUpdate(values)}
            className='h-full flex-1 bg-blue-500 overflow-none'
        >

            <div id='page-pages'>
                {Array(pageCount).fill(null).map((_, i) => makePage(i))}
            </div>

        </Scrollbars>

    );

}

