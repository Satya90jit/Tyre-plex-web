import React from "react";
import { ProductDescription, ProductImage } from "../cards";

const ProductSection = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <aside className="w-full lg:w-[35%] 2xl:w-[30%]">
          <ProductImage />
        </aside>
        <aside className="w-full lg:w-[65%] 2xl:w-[70%]">
          <ProductDescription />
        </aside>
      </div>
    </section>
  );
};

export default ProductSection;
