import { useState } from "react";

import { Colors, Layout } from "../../Styles"
import { logoCount, Logo } from './logo'

export default function Projects() {

    const name = 'projects';
    const [index, setIndex] = useState<number>(0);

    function label(id: string) {
        return `${name}-${id}`;
    }

    function makeImage(id: number) {

        const key = label(`-logo-${id}`)

        return <Logo key={key}
            id={id}
            index={index}
            setIndex={setIndex}
        />;
    }

    return (

        <div id={name} className={`w-full h-min m-10 px-10 py-10 ${Colors.bgMain} ${Layout.col}`}>

            <div id={label('skills')} className={`w-full h-min flex-initial table-fixed border-b-4 border-b-white ${Layout.row}`}>

                <p className={`w-min px-5 text-6xl text-left font-black flex-initial ${Layout.rBorder}`}
                > PROJECTS </p>

                {Array(logoCount).fill(null).map((_, id) => makeImage(id))}

                <div className={`mt-0.5 mb-1.5 ml-1.5 flex-1 bg-white ${Layout.rBorder}`} />

            </div>

            <div id={label('info')} className={`w-full h-96 my-5 flex-1 text-black bg-white ${Layout.center}`}>
                {index}
            </div>

        </div >
    );

}