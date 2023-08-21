export class Layout {
    static fill = 'w-full w-full';
    static col = 'flex flex-col';
    static row = 'flex flex-row';

    static center = 'flex justify-center items-center';
    static rowC = 'flex flex-row justify-center items-center';
    static colC = 'flex flex-col justify-center items-center';

    static rBorder = 'border-r-2 border-spacing-5 border-collapse';
}

export class Colors {
    static bgMain = 'bg-slate-600 bg-opacity-50'


    static gradience = 'animate-gradience bg-gradient-to-r bg-clip-text text-transparent';
    static gradience1 = `${this.gradience} from-blue-500 via-purple-500 to-green-500`;
    static gradience2 = `${this.gradience} from-pink-500 via-yellow-500 to-green-500`;
}

export class Text {
    static header = 'text-6xl font-black'
}


