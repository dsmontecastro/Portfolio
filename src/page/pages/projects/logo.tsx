import { SetNumber } from '../../../_types';
import { Layout } from '../../Styles';

import C from '../../../assets/logos/c.svg';
import Flutter from '../../../assets/logos/flutter.svg';
import Python from '../../../assets/logos/python.svg';
import React from '../../../assets/logos/react.svg';
// import School from '../../../assets/logos/school.svg'

export const logos = [
    // School,
    React,
    Python,
    C,
    Flutter
]

export const logoCount = logos.length;


interface Props {
    id: number
    index: number
    setIndex: SetNumber
}

export function Logo({ id, index, setIndex }: Props) {

    const key = 'logo-' + id;
    const img = logos[id];

    return (

        <button key={key} id={key} onClick={() => setIndex(id)}
            className={`flex-shrink px-5 text-center focus:outline-none ${Layout.center} ${Layout.rBorder}`}
        >

            <img src={img} className={`h-10 ${index == id ? 'brightness-110' : 'brightness-50'}`} />

        </button>

    );
}

export default logos;