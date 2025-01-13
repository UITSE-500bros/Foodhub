import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Active from "./Active";
import Completed from "./Completed";
import Canceled from "./Canceled";
import { TabView, SceneMap } from "react-native-tab-view";
import Product from "../../models/Product";
import axiosInstance from "../../service/axiosInstance";
type Order = {
  id: string;
  created_at: string;
  updated_at: string;
  total: number;
  product_list: Product[];
  delivery_address: string;
  transaction_status: string;
  order_state: string;
};
export type OrdersProps = {
  orders: Order[];
};
export default function Orders() {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const [orders, setOrders] = useState<Order[]>([]);
  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get("/order");
      setOrders(response.data);
    } catch {
      console.error("error fetch order", orders);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  
  const activeOrders = orders.filter(order => order.order_state === "Active");
  const completedOrders = orders.filter(order => order.order_state === "Completed");
  const canceledOrders = orders.filter(order => order.order_state === "Canceled");
  console.log(completedOrders);
  

  const renderScene = SceneMap({
    active: () => <Active orders={activeOrders} />,
    completed: () => <Completed orders={completedOrders} />,
    canceled: () => <Canceled orders={canceledOrders} />,
  });
  const routes = [
    { key: "active", title: "Active" },
    { key: "completed", title: "Completed" },
    { key: "canceled", title: "Canceled" },
  ];
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => (
        <View className="flex flex-row justify-between items-center px-4 py-2">
          {routes.map((route, i) => (
            <TouchableOpacity key={i} onPress={() => setIndex(i)}>
              <Text
                key={i}
                className={`text-lg font-bold ${
                  i === index ? "text-[#181725]" : "text-[#7C7C7C]"
                }`}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
}
