export class Layout {
    static fill = 'w-full w-full';
    static col = 'flex flex-col';
    static row = 'flex flex-row';

    static center = 'flex justify-center items-center';
    static rowC = 'flex flex-row justify-center items-center';
    static colC = 'flex flex-col justify-center items-center';

    static rBorder = 'border-r-2 border-spacing-5 border-collapse';

    static form = 'w-full mt-2 px-3 focus:outline-none';
}

export class Colors {
    static bgMain = 'bg-slate-800 bg-opacity-30';

    static formActive = 'text-white bg-slate-800';
    static formInactive = 'text-grey-500 bg-slate-900';

    static gradience = 'animate-gradience bg-gradient-to-r bg-clip-text text-transparent';
    static gradience1 = `${this.gradience} from-blue-500 via-purple-500 to-green-500`;
    static gradience2 = `${this.gradience} from-pink-500 via-yellow-500 to-green-500`;
}