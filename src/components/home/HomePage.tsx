import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Modal,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeData from "../../staticData/db1.json";
import styles from "../../css/home.module.css";
// import { ModalComponent } from "./Modal";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState<any>({});

  const handleClick = (item: any) => {
    setIsModalVisible(true);
    setSelectedBox(item);
    localStorage.setItem("details", JSON.stringify(item));
  };

  const items = [
    "CHUNKY SNEAKERS",
    "CASUAL HEEL SANDALS",
    "TORY BURCH MILLER SANDALS",
    "MIU MIU MATELASSE",
    "SAINT LAURENT TRIBUTE",
    "VEJA V12 SNEAKERS",
    "REEBOK INSTAPUMP SNEAKERS",
    "NIKE STEFAN JANOSKI MAX SNEAKERS",
    "MEN'S STRIPED JOGGERS",
    "LEOPARD-PRINT SHIRTS",
  ];

  const sections = [
    {
      title: "WOMEN'S CLOTHING",
      items: [
        "Beachwear and swimwear outfits",
        "Jackets",
        "Lingerie",
        "Jumpsuits and rompers",
        "Activewear, gym and workout clothes",
        "Pants, Slacks and Chinos",
        "Suits",
        "Hosiery",
      ],
    },
    {
      title: "MEN'S CLOTHING",
      items: [
        "Shirts",
        "Beachwear",
        "Jackets",
        "Activewear, gym and workout clothes",
        "Pants, Slacks and Chinos",
        "Suits",
        "Sweaters and knitwear",
        "Jeans",
      ],
    },
    {
      title: "WOMEN'S SHOES",
      items: [
        "Flats and flat shoes",
        "Heels",
        "Sneakers",
        "Boots",
        "Hobo bags and purses",
        "Shoulder bags",
        "Clutches and evening bags",
      ],
    },
    {
      title: "MEN'S SHOES",
      items: [
        "Suits",
        "Sweaters and knitwear",
        "Jeans",
        "Flats and flat shoes",
        "Sandals, slides and flip flops",
        "Lace-ups",
        "Slip-on shoes",
        "Boots",
        "Sneakers",
      ],
    },
    {
      title: "WOMEN'S ACCESSOR",
      items: [
        "Headbands, hair clips and hair accessories",
        "Face masks",
        "Gloves",
        "Belts",
        "Watches",
        "Umbrellas",
        "Phone cases",
        "Scarves and mufflers",
      ],
    },
    {
      title: "MEN'S ACCESSORIES",
      items: [
        "Ties",
        "Face masks",
        "Gloves",
        "Belts",
        "Watches",
        "Cufflinks",
        "Scarves and mufflers",
        "Hats",
      ],
    },
    {
      title: "WOMEN'S BAGS",
      items: [
        "Luggage and suitcases",
        "Hobo bags and purses",
        "Shoulder bags",
        "Clutches and evening bags",
        "Duffel bags and weekend bags",
        "Crossbody bags and purses",
        "Backpacks",
        "Briefcases and work bags",
      ],
    },
    {
      title: "MEN'S BAGS",
      items: [
        "Luggage and suitcases",
        "Duffel bags and weekend bags",
        "Toiletry bags and wash bags",
        "Backpacks",
        "Briefcases and laptop bags",
        "Belt Bags, waist bags and fanny packs",
        "Pouches and wristlets",
        "Tote bags",
      ],
    },
    {
      title: "WOMEN'S JEWELRY",
      items: [
        "Briefcases and laptop bags",
        "Belt Bags, waist bags and fanny packs",
        "Pouches and wristlets",
        "Necklaces",
        "Rings",
        "Brooches",
        "Earrings and ear cuffs",
        "Bracelets",
      ],
    },
    {
      title: "MEN'S JEWELRY",
      items: [
        "Necklaces",
        "Rings",
        "Brooches",
        "Briefcases and laptop bags",
        "Belt Bags, waist bags and fanny packs",
        "Pouches and wristlets",
        "Earrings and ear cuffs",
        "Bracelets",
      ],
    },
  ];

  return (
    <Grid>
      <img
        style={{
          width: "100%",
          height: isMobile ? "250px" : "500px",
          borderBottom: "1px solid black",
        }}
        src="https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg"
        alt="Dan Abramov"
      />
      <Grid className={styles.Row1}>
        <Grid>
          {HomeData.HomeData1.map((item, i) => (
            <Grid key={i} onClick={() => handleClick(item)}>
              <Typography variant="h2">{item.title}</Typography>
              <Grid>
                <img src={item.image} alt={item.title} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "0px" }} className={styles.Row1}>
        <Grid>
          {HomeData.HomeData2.map((item, i) => (
            <Grid key={i} onClick={() => handleClick(item)}>
              <Typography variant="h2">{item.title}</Typography>
              <Grid>
                <img src={item.image} alt={item.title} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className={styles.Row3}>
        <Grid>
          {HomeData.HomeData3.map((item, i) => (
            <Grid key={i} onClick={() => handleClick(item)}>
              <Typography variant="h2">{item.title}</Typography>
              <img src={item.image} alt={item.title} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid style={{ marginTop: "0px" }} className={styles.Row4}>
        <Grid>
          {HomeData.HomeData4.map((item, i) => (
            <Grid key={i} onClick={() => handleClick(item)}>
              <Typography variant="h2">{item.title}</Typography>
              <img src={item.image} alt={item.title} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "0px" }} className={styles.Row4}>
        <Grid>
          {HomeData.HomeData5.map((item, i) => (
            <Grid key={i} onClick={() => handleClick(item)}>
              <Typography variant="h2">{item.title}</Typography>
              <img src={item.image} alt={item.title} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "0px" }} className={styles.Row4}>
        <Grid>
          {HomeData.mens.map((item, i) => (
            <Grid key={i} onClick={() => handleClick(item)}>
              <Typography variant="h2">{item.title}</Typography>
              <img src={item.image} alt={item.title} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        mt={4}
        spacing={0.5}
        style={{
          textAlign: "left",
          border: "1px solid black",
        }}
      >
        {[
          {
            number: "1",
            title: "THE BEST PRICES",
            description1: "Shop over 12,000 brands and stores in one place.",
            description2:
              "Find exactly what you want with powerful search and personal recommendations.",
          },
          {
            number: "2",
            title: "THE BIGGEST SELECTION",
            description1: "See what’s new and what’s trending.",
            description2:
              "Hit the heart to receive alerts on the latest drops from your favourite brands.",
          },
          {
            number: "3",
            title: "THE BEST PRICES",
            description1:
              "Compare prices and shipping options across thousands of stores.",
            description2:
              "Lyst members are notified when an item goes on sale.",
          },
        ].map((box, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Grid
              display={"flex"}
              flexDirection={"column"}
              pl={isMobile ? 5 : 10}
              sx={{
                backgroundColor: "#f5f4f2",
                height: isMobile ? 400 : 550,
              }}
            >
              <Typography
                variant="h1"
                sx={{ marginTop: "30px", fontWeight: "bold" }}
              >
                {box.number}
              </Typography>
              <Typography variant="h4" sx={{ marginTop: "5px" }}>
                {box.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "4px", width: "70%" }}
              >
                {box.description1}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "4px", width: "70%" }}
              >
                {box.description2}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#cafc4f",
              height: isMobile ? 400 : 535,
              pt: 2,
              width: "100%",
              "&:hover": {
                backgroundColor: "#c9bffb",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{ marginTop: "20px", marginLeft: "16px" }}
            >
              SIGN UP FOR SMARTER SHOPPING
            </Typography>
            <Button
              color="primary"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: isMobile ? "200px" : "140px",
                marginLeft: "16px",
                marginTop: "10px",
              }}
            >
              Join➔
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box component={"span"} className={styles.MOST}>
        MOST WANTED
      </Box>
      <Grid className={styles.mostdiv}>
        <Grid>
          {items.map((el, i) => (
            <Typography key={i} variant="h2" color={"#444444"}>
              {el}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Grid className={styles.womens}>
        <Grid>
          {sections.map((section, index) => (
            <Grid key={index}>
              <Typography
                sx={{
                  fontSize: "30px",
                  textAlign: "left",
                  fontWeight: "bold",
                  transform: "rotate(270deg)",
                  width: "360px",
                  marginLeft: "-260px",
                  marginRight: "20px",
                  position: "relative",
                  marginTop: "150px",
                  marginBottom: "10px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "blue",
                  },
                }}
                variant="h2"
              >
                {section.title}
              </Typography>
              <Grid>
                {section.items.map((item, index) => (
                  <Typography variant="h6" key={index}>
                    {item}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* <Modal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <ModalComponent
          data={selectedBox}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
      </Modal>*/}
    </Grid>
  );
};

export default HomePage;
