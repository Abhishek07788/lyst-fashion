import React from "react";
import Data from "../../staticData/db2.json";
import ProductCard from "@/src/components/productcard/ProductCard";
import { ProductCardType } from "@/src/types/ProductType";

const MenPage = () => {
  return <ProductCard data={Data.mensData as ProductCardType[]} />;
};

export default MenPage;
