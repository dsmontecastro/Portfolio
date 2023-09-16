import { useEffect, useRef, useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Scrollbars, { positionValues } from 'react-custom-scrollbars-2';

import { Layout } from '../../../Styles';

import Projects from '../data/projects.json';
import { Project, ProjectList } from '../data/_types';

import Previews from './Previews';
import { logoNames } from './Logo';


interface Props { index: number }
type Step = 1 | -1;

const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

export default function Skill({ index }: Props) {

    const name = 'showcase-projects';

    function label(id: string) {
        return `${name}-${id}`;
    }

    /* ----------------------- Controls ID State corresponding to current Preview Shown ----------------------- */

    const [id, setID] = useState<number>(0);

    const previewRefs = useRef<(HTMLElement | null)[]>([]);

    const next = () => step(1);
    const prev = () => step(-1);

    function step(step: Step) {
        const _id = id + step;
        if (_id >= 0 && _id < count) {
            const preview = previewRefs.current[_id];
            preview?.scrollIntoView(scrollOptions);
        }
    }

    function scrollTo(i: number) {
        const preview = previewRefs.current[i];
        preview?.scrollIntoView(scrollOptions);
    }

    function onScroll(values: positionValues) {
        const per = values.left;
        const pos = (count - 1) * per;
        setID(Math.round(pos));
    }

    /* -------------------------------- Change Project Previews based on Index -------------------------------- */

    const projectList = JSON.parse(JSON.stringify(Projects)) as ProjectList;

    const projects: Project[] = projectList[logoNames[index]];
    const count = projects.length;

    // Return to 1st ID on Index change
    useEffect(() => scrollTo(0), [index]);

    function makePreviews(id: number, project: Project) {

        const key = label(id.toString());

        return <Previews key={key}
            id={id}
            refs={previewRefs}
            project={project}
        />;

    }

    return (

        <div key={name} id={name} className={`h-[75vw] landscape:h-[40vw] p-3 bg-slate-900 ${Layout.colC}`}>

            <div id={label('main')} className={`flex-1 ${Layout.rowC} ${Layout.fill}`}>

                <button onClick={prev}
                    className={`h-full mr-5
                    portrait:hidden ${Layout.center}
                    ${count > 1 ? 'visible' : 'invisible'}
                `}> <AiFillCaretLeft /> </button>

                <Scrollbars onUpdate={onScroll}
                    renderView={props => <div {...props} className={Layout.previewScroller} />}
                > {projects.map((project, id) => makePreviews(id, project))} </Scrollbars >

                <button onClick={next}
                    className={`h-full ml-5
                    portrait:hidden ${Layout.center}
                    ${count > 1 ? 'visible' : 'invisible'}
                `}> <AiFillCaretRight /> </button>

            </div>

            <div id={label('swiper')}
                className={`w-full h-[5%]
                landscape:gap-[10] ${Layout.rowC}
                ${count > 1 ? 'visible' : 'invisible'}
            `}> {Array(count).fill(null).map((_, i) =>
                    <button key={`swiper-${i}`} onClick={() => scrollTo(i)}>
                        {(i == id) ? '◈' : '◇'}
                    </button>
                )}
            </div>

        </div >

    );
}