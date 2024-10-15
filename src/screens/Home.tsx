import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";


const Home = () => {
  return (
    <View className="flex flex-col  items-center">
      <Image
        source={{ uri: "https://picsum.photos/30" }}
        className=" w-[30px] h-[30px] "
      />
      {/* search bar */}
      <View className="w-[364] h-[52] shrink-0  bg-white">
        <Searchbar 
            placeholder="Search..."
            value=""
            onChangeText={()=>{}}
            style={{borderRadius: 10,backgroundColor: '#F9F9F9'}}
            />
     
      </View>
 
   
     
    </View>
  );
};

const styles = StyleSheet.create({

    });

export default Home;
