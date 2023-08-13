import { pageBodies } from "./_";

interface PageProps {
    width: string
}

export default function Pages({ width }: PageProps) {

    const pageElements = pageBodies.map((s, i) =>
        <section key={i} id={`page-${i}`} className="py-10 mb-10 bg-gray-500 rounded-lg">
            <p className="text-9xl mx-20 text-white"> ITEM#{i + 1}: {s} </p>
        </section>
    );

    return (
        <div id="page-container" className={`${width} h-max float-right bg-blue-500`}>

            <header className="mb-12 text-white text-9xl underline">
                HEADER
            </header>

            <div id="pages" className="">
                {pageElements}
            </div>

        </div>
    )
}
