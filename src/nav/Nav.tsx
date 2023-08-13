// import { MutableRefObject, useEffect, useState } from "react";
import { MutableRefObject, useEffect } from "react";

import { pageNames } from "../pages/_.tsx"

interface NavProps {
    width: string
    pages: MutableRefObject<(HTMLDivElement | null)[]>
    // body: MutableRefObject<(HTMLDivElement | null)>
}

// export default function Nav({ width, pages, body }: NavProps) {
export default function Nav({ width, pages }: NavProps) {

    /* ----------------------------------------------- Nav Items ---------------------------------------------- */

    const scrollOptions: ScrollIntoViewOptions = { behavior: "smooth", block: "center" }

    function navTo(target: (HTMLDivElement | null)) {
        target?.scrollIntoView(scrollOptions);
        console.log(window.scrollY);
        // console.log(target?.id);
    }

    const items = pageNames.map((s, i) => {
        return (
            <li key={i}>
                <button onClick={() => navTo(pages.current[i])}>
                    <div className="flex flex-row">
                        <span className=" inline-block rounded-lg"> x </span>
                        <p className="text-white"> {s} </p>
                    </div>
                </button>
            </li>
        )
    });

    /* --------------------------------------------- Progress Bar --------------------------------------------- */

    // const [progress, setProgress] = useState(0);

    function scrollEnd() {
        const pos = window.scrollY;
        console.log(pos);
        // const top = body.scrollTop;
        // const pos = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // const percent = (top / pos) * 100;
        // console.log(percent);
        // setProgress(percent);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollEnd, true);
        return () => window.removeEventListener("scroll", scrollEnd, true);
    }, []);

    return (
        <div id="nav-container" className={`${width} h-screen fixed float-left text-left bg-red-500 bg-opacity-50`}>


            <div className={"w-1/10 h-3/4 mt-10 absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600"}>
                X
            </div>

            <div className="flex flex-row top-1/2">

                <div className="z-10 w-1/5 bg-green-300 bg-opacity-30" />

                <div id="nav-elements" className="z-10">

                    <header className="z-10 my-10 text-6xl ">
                        Nav
                    </header>


                    <ul className="z-10">
                        {items}
                    </ul>

                    divd</div>

            </div>

        </div>
    )
}
