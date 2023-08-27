
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';

import { PageRefs, SetNumber } from '../_types';
import { pageCount } from './pages/_';
import { Layout } from './Styles';
import Page from './PageItem';

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

        <Scrollbars id='scroller' onUpdate={onUpdate}
            renderView={props => <div {...props} className='flex-1' />}
        >

            <main id='pages' className={Layout.col}>
                {Array(pageCount).fill(null).map((_, i) => makePage(i))}
            </main>

        </Scrollbars>

    );

}

