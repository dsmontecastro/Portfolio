import { useRef } from 'react';

import Nav from './nav/Nav';
import Pages from './pages/_Pages';

export default function App() {

  const navWidth = 'w-1/6';
  const pageWidth = 'w-5/6';
  const pageRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <>
      <Nav width={navWidth} pages={pageRefs} />
      <Pages width={pageWidth} refs={pageRefs} />
    </>
  )
}

export default class App extends Component {
  constructor(props: ) {

  }


}