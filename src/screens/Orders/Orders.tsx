import { View, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";
import Active from "./Active";
import Completed from "./Completed";
import Canceled from "./Canceled";
import { TabView, SceneMap } from "react-native-tab-view";
export default function Orders() {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    active: Active,
    completed: Completed,
    canceled: Canceled,
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
