import About from './about/About';
import Contact from './contact/Contact';
import Showcase from './showcase/Showcase';

// Note: Keep Names short (< 10 char) for NAV
export const pages = [
    { name: "About", body: <About /> },
    { name: "Projects", body: <Showcase /> },
    { name: "Contact", body: <Contact /> },
]

export const pageCount = pages.length;