import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

// Note: Keep Names short (< 10 char) for NAV
export const pages = [
    { name: About.name, body: <About /> },
    { name: Projects.name, body: <Projects /> },
    { name: Contact.name, body: <Contact /> },
]

export const pageCount = pages.length;