import { useState } from "react";

import { Colors, Layout } from "../../Styles"

import { logoCount, Logo } from './Logo'
import Preview from "./Preview";


export default function Projects() {

    const name = 'projects';

    const [index, setIndex] = useState<number>(0);

    function label(id: string) {
        return `${name}-${id}`;
    }

    function makeImage(id: number) {

        const key = label(`-logo-${id}`);

        return <Logo key={key}
            id={id}
            index={index}
            setIndex={setIndex}
        />;
    }

    return (

        <div id={name} className={`${Layout.bgMain} ${Colors.bgMain}`}>

            <div id={label('main')} className={`p-10 ${Layout.col}`}>

                <div id={label('skills')} className={`w-full mx-auto mb-5 flex-non ${Layout.row} ${Colors.bBorder}`}>

                    <p className={`px-4 pb-3.5 pt-1 max-sm:hidden flex-none
                            text-left font-black sm:text-2xl md:text-4xl
                            2xl:text-[5.5rem] xl:text-[4.0rem] lg:text-5xl
                    `}> PROJECTS </p>

                    <div id={label('logos')} className={`w-7/12 max-sm:w-full flex-none ${Layout.row} ${Colors.sBorder}`}>
                        {Array(logoCount).fill(null).map((_, id) => makeImage(id))}
                    </div>

                </div>

                <div id={label('previews')} className={`w-full h-full flex-none bg-slate-700 bg-opacity-30 ${Layout.center}`}>

                    {index + 1}

                    <Preview id={index} />

                </div>

            </div >

        </div >
    );

}