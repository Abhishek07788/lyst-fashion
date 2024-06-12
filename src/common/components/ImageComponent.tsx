import { Box, BoxProps } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImageComponent = ({
  src,
  alt,
  height,
  width,
  sx,
  style,
  ...rest
}: {
  src: string;
  alt: string;
  height: string | number | null;
  width: string | number | null;
  sx?: BoxProps;
  style?: React.CSSProperties;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: height ?? "100%", width: width ?? "100%", ...sx }}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={160}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        style={{ height: "100%", width: "100%", ...style }}
      />
    </Box>
  );
};

export default ImageComponent;
