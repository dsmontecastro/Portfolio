import { useRef, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { Layout } from "../../../Styles";
import { Project } from "./_types";

import { projectList } from "./_";
import Previews from "./Previews";
import Scrollbars, { positionValues } from "react-custom-scrollbars-2";


interface Props {
    index: number
}

type Step = 1 | -1;
const scrollOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' };

export default function Skill({ index }: Props) {

    const name = 'showcase-projects';

    function label(id: string) {
        return `${name}-${id}`;
    }

    /* ----------------------- Controls ID State corresponding to current Preview Shown ----------------------- */

    const [id, setID] = useState<number>(0);
    // const [scrolling, setScrolling] = useState<boolean>(false);

    const previewRefs = useRef<(HTMLElement | null)[]>([]);

    const next = () => step(1);
    const prev = () => step(-1);

    function step(step: Step) {
        const _id = id + step;
        if (_id >= 0 && _id < count) {
            // setScrolling(true);
            const preview = previewRefs.current[_id];
            preview?.scrollIntoView(scrollOptions);
            // setScrolling(false);
            // setID(_id);
        }
    }

    function onScroll(values: positionValues) {
        // if (scrolling) {
        console.log('scrolling');
        const per = values.left;
        const pos = (count - 1) * per;
        setID(Math.round(pos));
        console.log(id);
        // }
    }

    /* -------------------------------- Change Project Previews based on Index -------------------------------- */

    const projects: Project[] = projectList[index].projects;
    const count = projects.length;

    function makePreviews(id: number, project: Project) {

        const key = label(id.toString());

        return <Previews key={key}
            id={id}
            refs={previewRefs}
            project={project}
        />;

    }

    return (

        <div key={name} id={name} className={`h-[50vh] landscape:h-[100vh] py-3 landscape:px-2 bg-slate-900 ${Layout.colC}`}>

            <div id={label('main')} className={`flex-1 ${Layout.rowC} ${Layout.fill}`}>

                <button onClick={prev} className={`h-full portrait:hidden ${Layout.center}`}>
                    <AiFillCaretLeft />
                </button>

                <Scrollbars onUpdate={onScroll}
                    renderView={props => <div {...props} className={Layout.previewScroller} />}
                > {projects.map((project, id) => makePreviews(id, project))} </Scrollbars >

                <button onClick={next} className={`h-full portrait:hidden ${Layout.center}`}>
                    <AiFillCaretRight />
                </button>

            </div>

            <div id={label('swiper')} className={`w-full h-[5%] landscape:gap-[10] ${Layout.rowC}`}>
                {Array(count).fill(null).map((_, i) =>
                    <p key={`swiper-${i}`}>
                        {(i == id) ? '◈' : '◇'}
                    </p>
                )}
            </div>

        </div >

    );
}