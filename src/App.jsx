import { Suspense } from "react";
import Headings from "./components/Headings";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";

const loadeOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadeOrders();
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Headings>Kitchen Room</Headings>
      </section>
      <section>
        <Suspense fallback={"Loading ⌛"}>
          <OrderContainer ordersPromise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
    </>
  );
}

export default App;
