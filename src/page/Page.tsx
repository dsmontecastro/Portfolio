
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';

import { PageRefs, SetNumber } from '../_types';
import { pageCount } from './pages/_';
import Page from './PageItem';
import Layout from './Styles';

interface Props {
    pageRefs: PageRefs
    setIndex: SetNumber
}

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

        <Scrollbars id='scroller'
            onUpdate={(values) => onUpdate(values)}
            className={`flex-1 overflow-none ${Layout.fill}`}
        >

            <div id='pages' className={`${Layout.fill} ${Layout.col}`}>
                {Array(pageCount).fill(null).map((_, i) => makePage(i))}
            </div>

        </Scrollbars>

    );

}

