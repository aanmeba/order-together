import { useLocation } from "react-router-dom";
import { OrderInput } from "../components/order-input";
import { OrderList } from "../components/order-list";
import { OrderPreview } from "../components/order-preview";

const Order = () => {
  const location = useLocation();
  console.log(location, "--- Order page - navigate, location");

  return (
    <>
      <div>
        <h1>Order Page</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <OrderInput />
          <OrderList />
        </div>
        <OrderPreview />
      </div>
    </>
  );
};

export default Order;
