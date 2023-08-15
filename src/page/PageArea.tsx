
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';

import { PageRefs, SetNumber } from '../_types';
import { pageCount } from './_';

import Page from './PageItem';

interface Props {
    pageRefs: PageRefs
    setIndex: SetNumber
}

export default function PageArea({ pageRefs, setIndex }: Props) {

    function makePage(id: number) {
        return <Page id={id} refs={pageRefs} />
    }

    function onUpdate(values: positionValues) {
        const pos = values.top;
        let ind = Math.floor(pageCount * pos);
        if (ind >= pageCount) { ind = pageCount - 1; }
        setIndex(ind);
    }

    return (

        <div id='page-area' className='w-full h-full flex-1 bg-blue-500 overflow-none'>

            <Scrollbars id='page-scroll' onUpdate={(values) => onUpdate(values)}>

                <div id='page-pages'>
                    {Array(pageCount).fill(null).map((_, i) => makePage(i))}
                </div>

            </Scrollbars>
        </div>

    );

}

