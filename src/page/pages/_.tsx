import About from './About';
import Projects from './Projects';
import Contact from './Contact';

// Note: Keep Names short (< 10 char) for NAV
export const pages = [
    { name: About.name, body: <About /> },
    { name: Projects.name, body: <Projects /> },
    { name: Contact.name, body: <Contact /> },
]

export const pageCount = pages.length;