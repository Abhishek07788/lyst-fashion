import { ProductCardType } from "@/src/types/ProductType";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ data }: { data: ProductCardType[] }) => {
  return (
    <Grid container spacing={2} p={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={4} md={3} key={item.id}>
          <Grid p={2} boxShadow={2} bgcolor={"#fff"} borderRadius={1}>
            <img
              src={item.image}
              alt={item.title}
              height={"310px"}
              width={"100%"}
              style={{
                minHeight: "310px",
                backgroundColor: "#f3f7fd",
              }}
            />
            <Typography variant="h6" fontWeight={600}>
              Brand: {item.Brand}
            </Typography>
            <Stack direction={"row"} gap={1}>
              <Typography fontWeight={600}>
                Price: <del style={{ color: "red" }}>₹{item.olderprice}</del>
              </Typography>
              <Typography fontWeight={600}>₹{item.price} /-</Typography>
            </Stack>
            <Typography
              height={50}
              mt={1}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.title}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
