import { useRef } from 'react';
import ScrollBars from 'react-custom-scrollbars-2'

import Nav from './nav/Nav';
import Pages from './pages/_Pages';

export default function App() {

  const navWidth = 'w-1/6';
  const pageWidth = 'w-5/6';
  const pageRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <>
      <Nav width={navWidth} pages={pageRefs} />
      <ScrollBars>
        <Pages width={pageWidth} refs={pageRefs} />
      </ScrollBars>
    </>
  )
}
