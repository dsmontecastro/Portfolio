import { Layout } from "../../../Styles";

import { projectList, Project } from "./_";
import Preview from "./Preview";

interface Props {
    index: number
}

export default function Skill({ index }: Props) {

    const name = 'showcase-projects-panel';

    function label(id: string) {
        return `${name}-${id}`;
    }

    const projects: Project[] = projectList[index].projects;

    function makePreview(i: number, project: Project) {

        const key = label(i.toString());

        return <Preview key={key}
            id={key}
            project={project}
        />;

    }

    return (

        <div key={name} id={name} className={`w-full h-5/6 ${Layout.rowC} bg-red-500`}>

            {projects.map((project, i) => makePreview(i, project))}

        </div>

    );
}