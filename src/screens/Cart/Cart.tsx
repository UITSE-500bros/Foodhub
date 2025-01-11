import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { VNpayScreenNavigationProp } from "../../../type";
import { ProductCard } from "../../components";
import useCartStore from "./store/CartStore";
import { usersService } from "../../service";

const InfoSection: React.FC<{ title: string; children: React.ReactNode; onPress?: () => void; stroke?: boolean }> = ({ title, children, onPress, stroke = true }) => (
  <TouchableOpacity onPress={onPress} style={styles.infoSection}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </TouchableOpacity>
);

const PaymentMethod: React.FC<{handleGoBack: () => void}> = ({ handleGoBack }) => (
  <BottomSheetView style={styles.methodItem}>
    <Text style={styles.methodText}>VNPAY</Text>
    <Icon name="right" type="antdesign" size={20} onPress={handleGoBack}/>
  </BottomSheetView>
);

const PromotionCode: React.FC<{handleGoBack: () => void}> = ({ handleGoBack }) => (
  <BottomSheetView style={styles.methodItem}>

    <Text style={styles.methodText}>PROMO codes</Text>
    <Icon name="right" type="antdesign" size={20} onPress={handleGoBack}/>
  </BottomSheetView>
);

const Main: React.FC<{ handleClosePress: () => void; openPayment: () => void }> = ({ handleClosePress, openPayment }) => (
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
      <Text style={styles.text}>Giao hàng tiêu chuẩn</Text>
      <Icon name="right" type="antdesign" size={20} />
    </InfoSection>
    <InfoSection title="Mã giảm giá" onPress={openPayment}>
      <Text style={styles.text}>Giao hàng tiêu chuẩn</Text>
      <Icon name="right" type="antdesign" size={20} />
    </InfoSection>
    <InfoSection title="Tổng tiền" stroke={false}>
      <Text style={styles.text}>Giao hàng tiêu chuẩn</Text>
    </InfoSection>
    <TouchableOpacity style={styles.paymentButton}>
      <Text style={styles.paymentText}>Thanh toán</Text>
    </TouchableOpacity>
  </BottomSheetView>
);

const Cart: React.FC = () => {
  const { cart, updateQuantity } = useCartStore(state => state);
  const nav = useNavigation<VNpayScreenNavigationProp>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [total, setTotal] = useState(0);
  const handleClosePress = useCallback(() => bottomSheetRef.current?.close(), []);

  const handleGoBack = () => {
    console.log("handleGoBack");
    setBottomSheetContent(<Main handleClosePress={handleClosePress} openPayment={openPayment} />);
    bottomSheetRef.current?.expand();
  };
  const openPayment = () => {
    setBottomSheetContent(<PaymentMethod handleGoBack={handleGoBack}/>);
    bottomSheetRef.current?.expand();
  };
  const [bottomSheetContent, setBottomSheetContent] = useState<React.ReactNode>();

  useEffect(() => {
    const totalAmount = cart.reduce((acc, item) => acc + item.product_price * item.quantity, 0);
    setTotal(totalAmount);
  }, [cart]);

  const snapPoints = useMemo(() => ["50%", "75%"], []);
  
  
  const handlePayment = async () => {
    try {
      const url = await usersService.checkout(50000);
      if (url) nav.navigate("VNpay", { uri: url });
    } catch (error) {
      console.error("Error presenting payment sheet:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.cartTitle}>Giỏ hàng</Text>
        <Text style={styles.totalText}>Tổng tiền {total}</Text>
        <Text style={styles.addressLabel}>Địa chỉ giao hàng:</Text>
        <Text style={styles.address}>Phường Linh Trung, Quận Thủ Đức, TP.HCM</Text>
      </View>
      <FlatList
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