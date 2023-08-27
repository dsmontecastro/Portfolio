// import logos from "./Logo";
import { Project, ProjectList } from "./_types";

const test: Project = {
    name: 'test',
    desc: 'test',
    image: 'x',
}

export const projectList: ProjectList[] = [
    { 'skill': 'react', 'projects': [test, test, test, test] },
    { 'skill': 'python', 'projects': [test, test, test] },
    { 'skill': 'csharp', 'projects': [test, test] },
    { 'skill': 'flutter', 'projects': [test] }
]

export const previewCount = projectList.length;
