import About from './about/About';
import Contact from './contact/Contact';
import Showcase from './showcase/Showcase';

// Note: Keep Names short (< 10 char) for NAV
export const pages = [
    { name: About.name, body: <About /> },
    { name: Showcase.name, body: <Showcase /> },
    { name: Contact.name, body: <Contact /> },
]

export const pageCount = pages.length;