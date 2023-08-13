import Nav from "./nav/Nav";
import Pages from "./pages/_Pages";

export default function App() {

  const navWidth = "w-1/6";
  const pageWidth = "w-5/6";

  return (
    <>
      <Nav width={navWidth} />
      <Pages width={pageWidth} />
    </>
  )
}
