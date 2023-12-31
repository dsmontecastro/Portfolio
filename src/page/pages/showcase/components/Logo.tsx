import { SetNumber } from '../../../../_types';
import { Colors, Layout } from '../../../Styles';

/* ---------------------------------------------- SVG Imports --------------------------------------------- */

// import JavaScript from '../../../../assets/logos/javascript.svg';

import React from '../../../../assets/logos/react.svg';
import Python from '../../../../assets/logos/python.svg';
import CSharp from '../../../../assets/logos/csharp.svg';
import Flutter from '../../../../assets/logos/flutter.svg';

/* ------------------------------------------ Reusable Constants ------------------------------------------ */

export const logos = [
    // JavaScript,
    React,
    Python,
    CSharp,
    Flutter
]

export const logoNames = [
    // 'javascript',
    'react',
    'python',
    'csharp',
    'flutter'
]

export const logoCount = logos.length;
const last = logoCount - 1;


/* ------------------------------------------- Component Proper ------------------------------------------- */

interface Props {
    id: number
    index: number
    setIndex: SetNumber
}

export function Logo({ id, index, setIndex }: Props) {

    const key = 'logo-' + id;
    const logo = logos[id];

    return (

        <div key={key} id={key} className={`flex-1 ${id == last ? '' : Colors.rBorder}`}>

            <input type='image' src={logo} onClick={() => setIndex(id)}
                className={`m-auto ${Layout.logo} ${Layout.center}
                    max-xs:p-1 xs:p-4 sm:p-2 md:p-4
                    ${index == id ? '' : 'hover:brightness-75'}
                    ${index == id ? '' : 'focus:brightness-75'}
                    ${index == id ? 'brightness-110' : 'brightness-50'}
            `} />

        </div>
    );
}

export default logos;