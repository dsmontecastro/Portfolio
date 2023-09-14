import { Layout } from '../../../Styles';
import { Project, PreviewRef } from '../data/_types';

interface Props {
    id: number
    refs: PreviewRef
    project: Project
}

export default function Previews({ id, refs, project }: Props) {

    const key = `projects-${id}`;


    return (

        <div key={key} id={key} ref={(e) => { refs.current[id] = e; }}
            className={`flex-shrink-0 ${Layout.colC} ${Layout.fill}`}
        >

            <div className={`m-3 flex-none
                max-lg:text-lg lg:text-2xl
            `}> {project.name} </div>

            <div className={`mx-3 items-start flex-1 ${Layout.fill} ${Layout.row} bg-slate-800 bg-opacity-30`}>

                <div className={`h-full flex-[2] ${Layout.center}`}>
                    <div className={`w-[90%] h-[90%] bg-slate-800 ${Layout.center}`}>
                        x
                    </div>
                </div>

                <div className={`pr-[2.5vw] py-[2.5%] portrait:hidden
                        max-md:hidden md:text-[0.5rem]/loose
                        lg:text-sm xl:text-lg 2xl:text-3xl
                        text-justify overflow-y-auto
                        flex-1 ${Layout.center}
                `}>  {project.desc.join(' ')} </div>

            </div>

        </div>

    );

}