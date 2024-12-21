type Product = {
    id: string;
    created_at: string;
    updated_at: string;
    product_name: string;
    product_price: number;
    category_id: string;
    is_sale: boolean;
    percentage_sale: number;
    product_image: string;
    brand: string;
  };
  
  export default Product;