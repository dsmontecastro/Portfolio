import Nav from "./Nav";
import { appPages } from "./pages/_pages";

export default function App() {

  const navWidth = "1/6";

  const pageElements = appPages.map((s, i) =>
    <section key={i} id={`page-${i}`} className="py-10 mb-10 bg-gray-500 rounded-lg">
      <p className="text-9xl mx-20 text-white"> ITEM#{i + 1}: {s} </p>
    </section>
  );

  return (
    <>

      <Nav width={navWidth} />

      <div id="app-container" className={`w-full h-max flex flex-row bg-blue-400`}>

        <div id="nav-space" className={`w-${navWidth} flex-initial bg-red-400`} />

        <div id="app-proper" className={`h-max flex-1 bg-blue-400`}>

          <header className="mb-12 text-white text-9xl underline">
            HEADER
          </header>

          <div id="pages">
            {pageElements}
          </div>

        </div>

      </div>

    </>
  )
}
