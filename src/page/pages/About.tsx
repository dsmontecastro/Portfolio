import { Colors, Layout } from "../Styles";

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
        else if (hour < 20) time = 'Evening';
        else if (hour < 24) time = 'Night';

        return time.toUpperCase();
    }

    return (

        <div id={name} className={`m-10 p-10 bg-slate-800 bg-opacity-50 ${Layout.col}`}>

            <div id={label('title')} className={`${Layout.col}`}>

                <div id={label('greeting')} className={`mb-4 text-left text-8xl font-black flex-shrink ${Layout.row}`}>
                    <p> GOOD// </p>
                    <p className={`${Colors.gradience1}`}> {parseTime()}! </p>
                </div>

                <div id={label('intro')} className={`mb-7 pb-5 text-left text-5xl font-black flex-shrink`}>
                    I'm Daniel, aspiring Web|App Developer
                </div>

            </div>

            <div id={label('info')} className={`w-4/5 p-3 text-lg text-justify bg-black bg-opacity-30 flex-1 ${Layout.center}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id estlaborum.
            </div>

        </div >

    );

}