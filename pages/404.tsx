import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../components";

interface props {}

const Page404: NextPage<props> = ({}) => {
  return (
    <ShopLayout pageDescription="Pagina no encontrada" title="Shop | 404">
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        height={"calc(100vh - 200px)"}
        sx={{
            flexDirection: {
                xs: 'column',
                sm: 'row'
            }
        }}
      >
        <Typography
          variant="h1"
          component={"h1"}
          fontSize={80}
          fontWeight={200}
        >
          404 |
        </Typography>
        <Typography  marginLeft={2}>
          No encontramos ninguna pagina aqui
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Page404;
