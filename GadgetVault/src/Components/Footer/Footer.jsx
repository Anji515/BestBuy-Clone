import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Heading,
  Center,
  UnorderedList,
  Grid,
  Avatar,
} from "@chakra-ui/react";
import styled from "styled-components";

export function Footer() {
  return (
    <DIV mt={20}>
      <Center>
        <Flex
          w={"100%"}
          bg={"blackAlpha.100"}
          padding={10}
          margin={"auto"}
          gap={20}
          textAlign={["center"]}
          direction={["column", "column", "row", "row"]}
        >
          <Box>
            <Text>GET EMAIL OFFERS & THE LATEST NEWS FROM GadgetVault </Text>
            <br />
            <Text
              textAlign={"left"}
              whiteSpace={"nowrap"}
              fontWeight={600}
              fontSize={"lg"}
            >
              Enter Email
            </Text>
            <Input borderRadius={0} mb="5" border={"1px"} type="text" />

            <Button
              bg={"blackAlpha.800"}
              _hover={{ color: "black", bg: "blackAlpha.100" }}
              color="white"
            >
              SUBMIT
            </Button>
            <br />
            <br />
            <Heading textAlign={"left"} mb="2" fontSize="md">
              Get Connected
            </Heading>
            <Flex gap={5}>
              <Avatar
                _hover={{ cursor: "pointer", boxShadow: "base" }}
                size={"sm"}
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              />
              <Avatar
                size={"sm"}
                _hover={{ cursor: "pointer", boxShadow: "base" }}
                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
              />
              <Avatar
                size={"sm"}
                _hover={{ cursor: "pointer", boxShadow: "base" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIKllja9ypDAIYMRNv6twRAvvNNJXIjInI2owtCQ&s"
              />
              <Avatar
                size={"sm"}
                _hover={{ cursor: "pointer", boxShadow: "base" }}
                src="https://w0.peakpx.com/wallpaper/813/107/HD-wallpaper-tiktok-logo.jpg"
              />
              <Avatar
                size={"sm"}
                _hover={{ cursor: "pointer", boxShadow: "base" }}
                src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
              />
              <Avatar
                size={"sm"}
                _hover={{ cursor: "pointer", boxShadow: "base" }}
                src="https://pngimg.com/d/pinterest_PNG66.png"
              />
            </Flex>
          </Box>
          <Box>
            <Grid
              gap={10}
              textAlign={["center"]}
              templateColumns={{
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }}
            >
              <UnorderedList className="list-items" textAlign={"left"}>
                <Text mb={2} fontSize={"lg"} fontWeight={600}>
                  CUSTOMER CARE
                </Text>
                <Text>Help & FAQs</Text>
                <Text>Shipping</Text>
                <Text>Returns & Exchanges</Text>
                <Text>Order Tracking</Text>
                <Text>Corporate Sales & Gifts</Text>
                <Text>Contact Us</Text>
              </UnorderedList>
              <UnorderedList className="list-items" textAlign={"left"}>
                <Text mb={2} fontSize={"lg"} fontWeight={600}>
                  MY ACCOUNT
                </Text>
                <Text>Sign In or Sign Up</Text>
                <Text>Order Tracking</Text>
                <Text>My Auto Refresh</Text>
                <Text>My Love-it List</Text>
              </UnorderedList>
              <UnorderedList className="list-items" textAlign={"left"}>
                <Text mb={2} fontSize={"lg"} fontWeight={600}>
                  DISCOVER
                </Text>
                <Text>About Us</Text>
                <Text>Careers</Text>
                <Text>Gift Cards</Text>
                <Text>Shop by Fragrance</Text>
                <Text>Product Ingredients</Text>
                <Text>Get Inspired</Text>
              </UnorderedList>
              <UnorderedList className="list-items" textAlign={"left"}>
                <Text mb={2} fontSize={"lg"} fontWeight={600}>
                  FIND US
                </Text>
                <Text>Store Locator</Text>
                <Text>Global Locations</Text>
                <Text>Returns & Exchanges</Text>
                <Text>Order Tracking</Text>
                <Text>Corporate Sales & Gifts</Text>
                <Text>Contact Us</Text>
              </UnorderedList>
            </Grid>
          </Box>
        </Flex>
      </Center>
      <Box p={10} bg={"blackAlpha.200"}>
        <Text>
          Terms of use | Privacy Policy | Security Bug Report | States Privacy
          Rights Notice (Certain States) | Do Not Sell or Share My Personal
          Information (Certain States) | Transparency in Supply Chains |
          Targeted Ad Preferences (Certain States) | Limit the Use of My
          Sensitive Personal Information (California)
        </Text>
        <br />
        <br />
        <br />
        <Text>© 2023 GadgetVault, Inc. All Rights Reserved.</Text>
      </Box>
    </DIV>
  );
}

let DIV = styled.div`
  .list-items > p {
    padding: 10px;
    cursor: pointer;
  }
  .list-items > p:hover {
    text-decoration: underline;
  }
`;