export class Layout {
    static fill = 'w-full h-full';
    static hide = '2xl:hidden portrait:hidden';

    static col = 'flex flex-col';
    static row = 'flex flex-row';

    static center = 'flex justify-center items-center';
    static colC = `flex-col ${this.center}`;
    static rowC = `flex-row ${this.center}`;

}

export class Colors {

    static bg = 'bg-pink-600';
    static stroke = 'stroke-pink-600';

    // Nav Text
    static textActive = 'text-white';
    static textInactive = 'text-gray-400';

    // Nav Buttons
    static bttnActive = 'text-white';
    static bttnInactive = 'text-pink-900';
    static bttnFocus = 'focus:text-gray-400';
    static bttnHover = 'hover:!text-gray-600';

}