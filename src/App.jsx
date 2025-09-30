import Headings from "./components/Headings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Headings>
          Kitchen Room
        </Headings>
      </section>
    </>
  );
}

export default App;
