import { Link } from 'react-scroll';

import { pageNames } from '../pages/_.tsx'

interface NavProps {
    width: string
}

export default function Nav({ width }: NavProps) {

    const items = pageNames.map((s, i) => {
        return (
            <li key={i} className="content-center mb-5 ml-10 text-left text-3xl text-pink-500">
                <Link activeClass="active" smooth spy to={`page-${i}`}>
                    {s}
                </Link>
            </li>
        )
    });

    return (
        <div id="nav-container" className={`${width} h-screen fixed float-left text-center bg-red-500`}>

            <header className="text-6xl mb-10 mt-10">
                Nav
            </header>

            <ul className="list-disc items-end">
                {items}
            </ul>

        </div>
    )
}
