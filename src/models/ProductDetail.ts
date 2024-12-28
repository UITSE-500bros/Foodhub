import Product from "./Product";

interface ProductDetail extends Product {
    product_detail: string;
    quantity: number;
}
export default ProductDetail;