export class Layout {
    static fill = 'w-full w-full';
    static col = 'flex flex-col';
    static row = 'flex flex-row';

    static center = 'flex justify-center items-center';
    static rowC = 'flex flex-row justify-center items-center';
    static colC = 'flex flex-col justify-center items-center';

    static bgMain = 'w-11/12 h-4/6 my-10 2xs:my-14 landscape:mx-10 p-10';

    static form = 'w-full mt-2 px-3 focus:outline-none';
    static logo = 'max-2xs:h-8 2xs:h-10 xs:h-14 sm:h-16 md:h-12 lg:h-16'
}

export class Colors {
    static bgMain = 'rounded-2xl bg-slate-800 bg-opacity-95';

    static formActive = 'bg-gray-800 shadow-inner shadow-gray-800';
    static formInactive = 'text-gray-600 bg-black';

    static bBorder = 'border-b-4 border-b-white';
    static rBorder = 'border-r-4 border-spacing-5 border-collapse';
    static sBorder = 'border-r-8 border-l-8 border-white'

    static gradience = 'animate-gradience bg-gradient-to-r bg-clip-text text-transparent';
    static gradience1 = `${this.gradience} from-blue-500 via-purple-500 to-green-500`;
    static gradience2 = `${this.gradience} from-pink-500 via-yellow-500 to-green-500`;
}