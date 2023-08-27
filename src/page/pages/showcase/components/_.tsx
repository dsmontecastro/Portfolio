import logos from "./Logo";

export type Project = {
    'name': string
    'desc': string
    'image': string
}

export type ProjectList = {
    'skill': string
    'projects': Project[]
}

export const projectList: ProjectList[] = [
    { 'skill': 'react', 'projects': [] },
    { 'skill': 'python', 'projects': [] },
    { 'skill': 'csharp', 'projects': [] },
    { 'skill': 'flutter', 'projects': [] }
]

export const previewCount = projectList.length;
