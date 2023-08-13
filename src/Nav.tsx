import { Link } from 'react-scroll';

import { navNames } from './pages/_pages.tsx'

interface NavProps {
    width: string
}

export default function Nav({ width }: NavProps) {

    const items = navNames.map((s, i) => {
        return (
            <li key={i} className="content-center text-red-500 text-left text-3xl ml-10">
                <Link activeClass="active" smooth spy to={`section-${i}`}>
                    {s}
                </Link>
            </li>
        )
    });

    return (
        <nav id="nav-bar" className={`w-${width} h-screen fixed float-left`}>

            <header className="text-6xl mb-5">
                Nav
            </header>

            <ul className="items-center list-disc">
                {items}
            </ul>

        </nav>
    )
}
