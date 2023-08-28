import { Layout } from "../../../Styles";
import { Project, PreviewRef } from "./_types";

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

            <div className={`text-lg flex-none`}> {id} - {project.name} </div>

            <div className={`mx-3 items-start flex-1 ${Layout.fill} ${Layout.row} bg-slate-800 bg-opacity-30`}>

                <div className={`h-full flex-[2] ${Layout.center}`}>
                    <div className={`w-[90%] h-[90%] bg-black`} />
                </div>

                <div className={`p-5 portrait:hidden
                        max-md:hidden md:text-[0.5rem]/loose
                        lg:text-sm xl:text-lg 2xl:text-2xl
                        text-left flex-1 ${Layout.center}
                `}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </div>

            </div>

        </div>

        // <div key={key} id={key} ref={(e) => { refs.current[id] = e; }}
        //     className={`landscape:gap-3 flex-shrink-0 portrait:flex-col ${Layout.rowC} ${Layout.fill} bg-red-500`}
        // >

        //     <div className={`flex-1 landscape:h-full ${Layout.fill} ${Layout.colC} bg-green-500`}>
        //         <div className={`py-1 text-lg`}> {id} - {project.name} </div>
        //         <div className={`my-2 flex-grow ${Layout.fill} bg-blue-500`} />
        //     </div>

        //     <div className={`portrait:hidden p-5 text-justify
        //             max-sm:hidden sm:text-[0.5rem]
        //             md:text-xs
        //             flex-1 ${Layout.fill} ${Layout.center} bg-green-500`}>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        //         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        //         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        //         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        //         sunt in culpa qui officia deserunt mollit anim id estlaborum.
        //     </div>

        // </div>

    );

}