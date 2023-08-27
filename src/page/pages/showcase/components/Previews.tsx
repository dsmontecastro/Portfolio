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
            className={`p-[3%] flex-shrink-0 portrait:flex-col ${Layout.rowC} ${Layout.fill} bg-red-500`}
        >

            <div className={`flex-1 portrait:h-full ${Layout.fill} ${Layout.colC} bg-green-500`}>
                <div className={`py-1 text-xs bg-blue-500`}> {id} - {project.name} </div>
                <div className={`my-2 flex-grow ${Layout.fill} bg-blue-500`} />
            </div>

            <div className={`mt-2 px-1 text-xs text-justify flex-1`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id estlaborum.
            </div>

        </div>

    );

}