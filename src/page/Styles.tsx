export class Layout {
    static fill = 'w-full w-full';
    static col = 'flex flex-col';
    static row = 'flex flex-row';

    static center = 'flex justify-center items-center';
    static rowC = 'flex flex-row justify-center items-center';
    static colC = 'flex flex-col justify-center items-center';

    static bgMain = 'w-11/12 h-4/6 my-10 2xs:my-14 landscape:mx-10 p-10 space-y-1 portrait:space-y-3';

    static bBorder = 'border-b-4 border-b-white';
    static rBorder = 'border-r-2 border-spacing-5 border-collapse';

    static form = 'w-full mt-2 px-3 focus:outline-none';
}

export class Colors {
    static bgMain = 'rounded-2xl bg-slate-800 bg-opacity-95';

    static formActive = 'bg-gray-800 shadow-inner shadow-gray-800';
    static formInactive = 'text-gray-600 bg-black';

    static gradience = 'animate-gradience bg-gradient-to-r bg-clip-text text-transparent';
    static gradience1 = `${this.gradience} from-blue-500 via-purple-500 to-green-500`;
    static gradience2 = `${this.gradience} from-pink-500 via-yellow-500 to-green-500`;
}