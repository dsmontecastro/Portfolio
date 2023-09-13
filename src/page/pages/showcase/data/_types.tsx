import React from 'react';

export type Project = {
    'name': String
    'image': string | undefined
    "linkProj": string | undefined
    "linkCode": string | undefined
    'desc': string[]
}

export type ProjectList = Record<string, Project[]>;

export type PreviewRef = React.MutableRefObject<(HTMLElement | null)[]>;