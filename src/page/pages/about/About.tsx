import Wheel from "../../../assets/wheel/Wheel";

import { Colors, Layout } from "../../Styles";

const wheelPos = 'fixed right-0 landscape:translate-x-[50%] portrait:translate-y-24';

export default function About() {

    const name = 'about';

    function label(id: string) {
        return `${name}-${id}`;
    }

    function parseTime() {
        const hour = new Date().getHours();
        let time = '???';

        if (hour == 0) time = 'Day';
        else if (hour < 12) time = 'Morning';
        else if (hour == 12) time = 'Noon';
        else if (hour < 18) time = 'Afternoon'
        else if (hour < 24) time = 'Evening';

        return time.toUpperCase();
    }

    return (

        <div id={name} className={`w-full ${Layout.center}`}>

            <Wheel cw={true} rad={'scale-125'} pos={wheelPos} />
            <Wheel cw={false} rad={'scale-100'} pos={wheelPos} />
            <Wheel cw={true} rad={'scale-75'} pos={wheelPos} />
            <Wheel cw={false} rad={'scale-50'} pos={wheelPos} />
            <Wheel cw={true} rad={'scale-25'} pos={wheelPos} />

            <div id={label('main')} className={`${Layout.col} ${Layout.bgMain} ${Colors.bgMain}`}>

                <div id={label('title')} className={`font-black text-left portrait:text-center ${Layout.col}`}>

                    <div id={label('greeting')}
                        className={`mb-4 flex-shrink portrait:flex-col ${Layout.row}
                            3xs:text-lg 2xs:text-xl xs:text-2xl sm:text-3xl
                            md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl
                    `}> <p className='mr-1'> GOOD// </p>
                        <p className={Colors.gradience1}> {parseTime()}! </p>
                    </div>

                    <div id={label('intro')}
                        className={`pb-5 flex-shrink xxs:text-xs
                        xs:text-lg sm:text-xl md:text-xl
                        lg:text-3xl xl:text-4xl 2xl:text-5xl
                    `}> I'm Daniel, aspiring Web|App Developer </div>

                </div>

                <p id={label('info')}
                    className={`w-full lg:w-3/5 portrait:w-full p-6 rounded-md align-middle
                    3xs:text-[0.1rem] 2xs:text-xs xs:text-base sm:text- md:text-md lg:text-lg xl:text-xl 2xl:text-2xl
                    text-justify portrait:text-center overflow-y-scroll flex-shrink bg-slate-900`}
                >   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id estlaborum.
                </p>

            </div >

        </div>

    );

}