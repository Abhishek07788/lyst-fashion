import React from "react";
import Data from "../../staticData/db2.json";
import ProductCard from "@/src/components/productcard/ProductCard";
import { ProductCardType } from "@/src/types/ProductType";

const WomenPage = () => {
  return <ProductCard data={Data.womensData as ProductCardType[]} />;
};

export default WomenPage;
