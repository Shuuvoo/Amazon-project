import { useLoaderData } from "react-router-dom";
import Product from "./Home/Product";

const Products = () => {
    const{ products} = useLoaderData()
    console.log(products)
    
  return (
    <div>
      <h3 className="text-center font-bold my-5">This a products page</h3>
      <div className="grid grid-cols-3">
      {
        products?.map(product => <Product key={product.id} product={product}></Product>)
      }
      </div>
    </div>
  );
};

export default Products;
