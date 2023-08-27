import { useState } from "react";

import { Colors, Layout } from "../../Styles"

import { logoCount, Logo } from './components/Logo'
import Skill from "./components/Skill";


export default function Showcase() {

    const name = 'showcase';

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

        <div id={name} className={`w-screen ${Layout.center}`}>

            <div id={label('main')} className={`${Layout.col} ${Layout.bgMain} ${Colors.bgMain}`}>

                <div id={label('skills')} className={`w-full mb-5 items-center ${Layout.logo} ${Layout.row} ${Colors.bBorder}`}>

                    <p id={label('title')}
                        className={`px-3 text-center font-black flex-none max-md:hidden md:text-5xl lg:text-6xl`}
                    > PROJECTS </p>

                    <div id={label('logos')} className={`max-md:flex-1 ${Layout.rowC} ${Colors.sBorder}`}>
                        {Array(logoCount).fill(null).map((_, id) => makeImage(id))}
                    </div>

                </div>

                <div id={label('projects')} className={`h-[80%] bg-slate-700 bg-opacity-30 ${Layout.center}`}>
                    <Skill index={index} />
                </div>

            </div >

        </div>
    );

}