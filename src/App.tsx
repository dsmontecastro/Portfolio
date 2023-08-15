import { useRef, useState } from 'react';

import Nav from './nav/Nav';
import Pages from './pages/_Pages';

export default function App() {

  const [index, setIndex] = useState(0);
  const pageRefs = useRef<(HTMLLIElement | null)[]>([]);

  return (
    <div id='app' className="w-screen h-full flex flex-row">
      <Nav width='w-28' index={index} pageRefs={pageRefs} />
      <Pages pageRefs={pageRefs} setIndex={setIndex} />
    </div>
  );

}

