import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";
import CookingCard from "./cards/CookingCard";

const OrderContainer = ({ ordersPromise }) => {
  const orders = use(ordersPromise);
  const [cookingItems, setCookingItems] = useState([]);
  const handleOrder = (order) => {
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };
  return (
    <div>
      <States
        ordersTotal={orders.length}
        cookingTotal={cookingItems.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Orders</h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                order={order}
                handleOrder={handleOrder}
                key={order.id}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard order={order} key={order.id}></CookingCard>
            ))}
          </div>

          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10"></div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
