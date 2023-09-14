import React from 'react';

export type Project = {
    'name': string
    'image': string
    "linkCode": string
    "linkProj": string | undefined
    'desc': string[]
}

export type ProjectList = Record<string, Project[]>;

export type PreviewRef = React.MutableRefObject<(HTMLElement | null)[]>;