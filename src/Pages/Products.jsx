import { useLoaderData } from "react-router-dom";
import Product from "./Home/Product";

const Products = () => {
    const{ products} = useLoaderData()
    console.log(products)
    
  return (
    <div>
      <h1 className="text-center  font-extrabold text-4xl my-5">This a products page</h1>
      <div className="grid grid-cols-3 mx-5">
      {
        products?.map(product => <Product key={product.id} product={product}></Product>)
      }
      </div>
    </div>
  );
};

export default Products;
