import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckBox, Icon } from "@rneui/themed";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { AcceptedScreenNavigationProp, ErrorScreenNavigationProp, ProfileScreenNavigationProp, VNpayScreenNavigationProp } from "../../../type";
import { ProductCard } from "../../components";
import useCartStore from "./store/CartStore";
import { usersService } from "../../service";
import { checkout, vnpay } from "../../service/cart.service";
import Accepted from "../Accepted";
import * as Linking from "expo-linking";

const InfoSection: React.FC<{ title: string; children: React.ReactNode; onPress?: () => void; stroke?: boolean }> = ({ title, children, onPress, stroke = true }) => (
  <TouchableOpacity onPress={onPress} style={styles.infoSection}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children && <View className="flex items-end">{children}</View>}
  </TouchableOpacity>
);

const PaymentMethod: React.FC<{
  handleGoBack: () => void;

}> = ({ handleGoBack }) => {
  const [selectedIndex, setIndex] = useState(0); // 0: vnpay, 1: cod
  const handleSelection = (index: number) => {
    setIndex(index);
    useCartStore.getState().setPaymentMethod(index === 0 ? "vnpay" : "cod");

  };
  return (
    <BottomSheetView>
      <View className="flex justify-between items-center flex-row">
        {/* Payment Options */}
        <View className="mt-6 flex-1">
          <CheckBox
            checked={selectedIndex === 0}
            onPress={() => handleSelection(0)}// Call the setIndex function
            iconType="material-community"
            checkedIcon="radiobox-marked"
            uncheckedIcon="radiobox-blank"
            title="VNPay"
            containerStyle={{
              height: 62,
              justifyContent: "center",
              borderWidth: 0,
              backgroundColor: "transparent",
            }}
            textStyle={{ fontWeight: "bold" }}
          />
          <CheckBox
            checked={selectedIndex === 1}
            onPress={() => handleSelection(1)} // Call the setIndex function
            iconType="material-community"
            checkedIcon="radiobox-marked"
            uncheckedIcon="radiobox-blank"
            title="Thanh toán khi nhận hàng"
            containerStyle={{
              height: 62,
              justifyContent: "center",
              borderWidth: 0,
              backgroundColor: "transparent",
            }}
            textStyle={{ fontWeight: "bold" }}
          />
        </View>

        {/* Close Icon */}
        <Icon
          name="close"
          type="fontisto"
          size={30}
          onPress={handleGoBack}
          containerStyle={{ padding: 10 }}
        />
      </View>
    </BottomSheetView>
  );
};

const PromotionCode: React.FC<{ handleGoBack: () => void }> = ({ handleGoBack }) => {
  const coupons = useCartStore.getState().getCoupon();



  return (
    <BottomSheetView style={styles.methodItem}>

      <Text style={styles.methodText}>PROMO codes</Text>
      <Icon name="close" type="fontisto" size={30} onPress={handleGoBack} />
    </BottomSheetView>
  )
}

const Main: React.FC<{ total: number; handleClosePress: () => void; openPayment: () => void; handlePayment: () => void; openPromotion: () => void }> = ({ total, handleClosePress, openPayment, handlePayment, openPromotion }) => (
  <BottomSheetView style={styles.mainContainer}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Thanh toán 🎉</Text>
      <Icon name="close" type="fontisto" size={30} onPress={handleClosePress} />
    </View>
    <InfoSection title="Phương thức giao hàng" onPress={openPayment}>
      <View style={styles.details}>
        <Text style={styles.text}>Giao hàng tiêu chuẩn</Text>
        <Text style={styles.subText}>Miễn phí</Text>
      </View>
    </InfoSection>
    <InfoSection title="Phương thức thanh toán" onPress={openPayment}>
      <Text style={styles.text}>{useCartStore.getState().paymentMethod}</Text>
    </InfoSection>
    <InfoSection title="Mã giảm giá" onPress={openPromotion}>
      <TextInput placeholder="Nhập mã giảm giá" />
    </InfoSection>
    <InfoSection title="Tổng tiền" stroke={false}>
      <Text style={styles.text}>{total}</Text>
    </InfoSection>
    <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
      <Text style={styles.paymentText}>Thanh toán</Text>
    </TouchableOpacity>
  </BottomSheetView>
);

const Cart: React.FC = () => {
  const { cart, updateQuantity } = useCartStore(state => state);

  const nav_Accepted = useNavigation<AcceptedScreenNavigationProp>();
  const nav_VNPAY = useNavigation<VNpayScreenNavigationProp>();
  const nav = useNavigation<ErrorScreenNavigationProp>();
  const navPromotion = useNavigation<ProfileScreenNavigationProp>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [total, setTotal] = useState(50000);

  const handleClosePress = useCallback(() => bottomSheetRef.current?.close(), []);

  //Payment 
  const handlePayment = async () => {
    const paymenttype = useCartStore.getState().paymentMethod;
    if (total === 0) {
    }
    if (paymenttype === "cod") {
      const url = await checkout(total, useCartStore.getState().cart, 'Phường Linh Trung, Quận Thủ Đức, TP.HCM')
      if (url == 200) {
        nav_Accepted.navigate("Accepted");
      } else {
        nav.navigate("Error");
      }
    } else if (paymenttype === "vnpay") {
      const url = await vnpay(total, useCartStore.getState().cart, 'Phường Linh Trung, Quận Thủ Đức, TP.HCM')
      nav_VNPAY.navigate("VNpay", { uri: url });
    }
  }


  const handleGoBack = () => {
    setBottomSheetContent(<Main total={total} handleClosePress={handleClosePress} openPayment={openPayment} handlePayment={handlePayment} openPromotion={openPromotion} />);
    bottomSheetRef.current?.expand();
  };
  const openPayment = () => {
    setBottomSheetContent(<PaymentMethod handleGoBack={handleGoBack} />);
    bottomSheetRef.current?.expand();
  };
  const openPromotion = () => {
    navPromotion.navigate('Coupons');
  }

  const [bottomSheetContent, setBottomSheetContent] = useState<React.ReactNode>();

  useEffect(() => {
    const totalAmount = cart.reduce((acc, item) => acc + item.product_price * item.quantity, 0);
    setTotal(totalAmount);

    
  }, [cart]);

  const snapPoints = useMemo(() => ["55%"], []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerSection}>
        <Text style={styles.cartTitle}>Giỏ hàng</Text>
        <Text style={styles.totalText}>Tổng tiền {total}</Text>
        <Text style={styles.addressLabel}>Địa chỉ giao hàng:</Text>
        <Text style={styles.address}>Phường Linh Trung, Quận Thủ Đức, TP.HCM</Text>
      </View>
      <FlatList
        className="flex-1 mt-6"
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard key={item.id} adjust product={item} />}
        style={styles.cartList}
      />
      <TouchableOpacity style={styles.orderButton} onPress={handleGoBack} className="bg-black">
        <Text style={styles.orderButtonText}>Đặt hàng</Text>
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} style={styles.bottomSheet}>
        {bottomSheetContent}
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  headerSection: { alignItems: "center", marginTop: 20 },
  cartTitle: { fontSize: 24, fontWeight: "bold", color: "#181725" },
  totalText: { fontSize: 18, fontWeight: "900", color: "#7C7C7C" },
  addressLabel: { fontSize: 18, fontWeight: "600" },
  address: { fontSize: 16, color: "#333" },
  cartList: { width: "100%", height: Dimensions.get("window").height - 250 },
  orderButton: { position: "absolute", bottom: 20, left: 16, right: 16, height: 67, backgroundColor: "#53B175", borderRadius: 20, justifyContent: "center", alignItems: "center" },
  orderButtonText: { color: "white", fontSize: 16 },
  bottomSheet: { backgroundColor: "white" },
  methodItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 62 },
  methodText: { color: "black" },
  mainContainer: { padding: 20, flexDirection: "column", height: "100%" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  headerTitle: { fontSize: 20, fontWeight: "600" },
  infoSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 62 },
  sectionTitle: { fontSize: 16, color: "black" },
  details: { flexDirection: "column", alignItems: "flex-end" },
  text: { fontSize: 16, color: "black" },
  subText: { fontSize: 12, color: "gray" },
  paymentButton: { height: 67, backgroundColor: "#53B175", borderRadius: 20, justifyContent: "center", alignItems: "center" },
  paymentText: { color: "white", fontSize: 16 },
});

export default Cart;