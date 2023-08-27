import React from 'react';

export type Project = {
    'name': string
    'desc': string
    'image': string
}

export type ProjectList = {
    'skill': string
    'projects': Project[]
}

export type PreviewRef = React.MutableRefObject<(HTMLElement | null)[]>;