import { Project } from "./_"

interface Props {
    id: string
    project: Project
}

export default function Preview({ id, project }: Props) {

    return (

        <div id={id} className={``}>

            {id} - {project.name}

        </div>

    );

}