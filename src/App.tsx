import { useRef, useState } from 'react';

import Nav from './nav/Nav';
import Pages from './page/PageArea';

export default function App() {

  const [index, setIndex] = useState(0);
  const pageRefs = useRef<(HTMLLIElement | null)[]>([]);

  return (
    <>
      <Nav index={index} pageRefs={pageRefs} />
      <Pages pageRefs={pageRefs} setIndex={setIndex} />
    </>
  );

}

