import { CookingPot, ScrollText, Soup } from "lucide-react";

const States = ({ ordersTotal, cookingTotal, readyTotal }) => {
  return (
    <div className="w-11/12 mx-auto py-10 grid lg:grid-cols-3 gap-5">
      {/* total Order */}
      <div className="border-4 border-dotted border-amber-400 rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{ordersTotal}</h2>
          </div>
        </div>
      </div>

      {/* total Cooking */}
      <div className="border-4 border-dotted border-amber-400 rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{cookingTotal}</h2>
          </div>
        </div>
      </div>

      {/* total Ready */}
      <div className="border-4 border-dotted border-amber-400 rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Soup className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready to Serve
            <h2 className="text-6xl font-bold">{readyTotal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
