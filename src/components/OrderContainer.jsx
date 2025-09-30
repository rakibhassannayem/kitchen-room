import React, { use } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";

const OrderContainer = ({ ordersPromise }) => {
  const orders = use(ordersPromise);
  return (
    <div>
      <States orders={orders}></States>

      <section className="w-11/12 mx-auto py-10 grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Orders</h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard order={order} key={order.id}></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10"></div>
          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10"></div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
