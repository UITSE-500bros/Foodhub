import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import { OrdersProps } from "./Orders";
import OrderDetail from "./OrderDetail";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../../../type";
import BottomSheet from '@gorhom/bottom-sheet';
import { Rating } from 'react-native-ratings';

export default function Completed({ orders }: OrdersProps) {
  const nav = useNavigation<ProfileScreenNavigationProp>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  // State to hold review and rating
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  
  // Handle review submit
  const handleReviewSubmit = () => {
    console.log("Review:", review);
    console.log("Rating:", rating);
    bottomSheetRef.current?.close();
  };

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <View className="bg-white p-4 rounded-lg mb-4 shadow-md">
          <Text className="text-sm text-gray-500 mb-2">Order Date: {item.created_at}</Text>
          <Text className="text-lg font-bold text-gray-800 mb-4">Status: {item.transaction_status}</Text>
          <OrderDetail products={item.product_list} />
          
          <TouchableOpacity
            className="mt-4 bg-blue-500 p-2 rounded"
            onPress={() => bottomSheetRef.current?.expand()}>
            <Text className="text-white text-center">Đánh giá</Text>
          </TouchableOpacity>
          
          {/* Bottom Sheet for Rating and Review */}
          <BottomSheet
            ref={bottomSheetRef}
            index={-1} // Initially closed
            snapPoints={['50%', '80%']}
            onClose={() => setReview('')}
          >
            <View className="p-4">
              <Text className="text-xl mb-4">Rate Your Order</Text>
              
              {/* Rating Component */}
              <Rating
                ratingCount={5}
                imageSize={30}
                onFinishRating={(ratingValue) => setRating(ratingValue)}
                style={{ marginBottom: 10 }}
              />
              
              {/* Review Text Input */}
              <TextInput
                value={review}
                onChangeText={setReview}
                placeholder="Write your review here"
                multiline
                style={{
                  height: 100,
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  textAlignVertical: 'top',
                }}
              />
              
              {/* Submit Button */}
              <TouchableOpacity
                className="mt-4 bg-blue-500 p-2 rounded"
                onPress={handleReviewSubmit}>
                <Text className="text-white text-center">Submit Review</Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>
        </View>
      )}
    />
  );
}
