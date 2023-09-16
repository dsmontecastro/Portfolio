import { Textfit } from 'react-textfit';

import { Colors, Layout } from '../../../Styles';
import { Project, PreviewRef } from '../data/_types';

interface Props {
    id: number
    refs: PreviewRef
    project: Project
}

export default function Previews({ id, refs, project }: Props) {

    const key = `projects-${id}`;

    function label(name: string) {
        return `${key}-${name}`;
    }


    return (

        <div key={key} id={key} ref={(e) => { refs.current[id] = e; }}
            className={`flex-shrink-0 ${Layout.colC} ${Layout.fill}`}
        >

            <div id={label('title')} className={`m-3 flex-none max-lg:text-lg lg:text-2xl
            `}> {project.name} </div>

            <div className={`px-[3vw] py-[5vh] items-start flex-1 ${Layout.fill} ${Layout.row} bg-slate-600 bg-opacity-30`}>

                <div id={label('left')} className={`h-full flex-[2] bg-slate-700 ${Layout.center}`}>
                    <div className={`w-[90%] h-[90%] ${Layout.colC}`}>

                        <img id={label('image')} src={project.image} className={`w-full h-[90%] mb-[2.5%] ${Layout.rowC}`} />

                        <div id={label('buttons')} className={`w-full h-[10%] ${Layout.rowC}`}>

                            <a href={project.linkCode} className={`w-[40%] h-[90%] ${Layout.center} ${Colors.bgMain}`}>
                                Code
                            </a>

                            {project.linkProj &&
                                <a href={project.linkCode} className={`w-[40%] h-[90%] ml-[10%] ${Layout.center} ${Colors.bgMain}`}>
                                    Demo
                                </a>
                            }

                        </div>

                    </div>
                </div>

                <div className={`w-[3vw]`} />

                <Textfit id={label('desc')} forceSingleModeWidth={true}
                    className={`h-full p-[2vw]
                        portrait:hidden max-sm:hidden
                        text-justify bg-slate-900
                        flex-1 ${Layout.center}
                `}>  {project.desc.join(' ')} </Textfit>

            </div>

        </div>

    );

}