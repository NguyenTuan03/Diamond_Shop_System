import {
    Divider,
    Flex,
    Text,
    Link as LinkCharkaUI,
    Box,
    useColorModeValue,
    Container,
    useBreakpointValue,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import "react-lazy-load-image-component/src/effects/blur.css";
  import { Link as LinkReactRouterDOM } from "react-router-dom";
  import Title from "../../components/Title";
  import ScrollToTop from "react-scroll-to-top";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default function EducationCertificate() {
  
    const bgColor = useColorModeValue("white", "black");
    const normalText = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
    AOS.init();
    return (
      <>
        <ScrollToTop smooth style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4px" }} />
        <Container mawW={"100vw"}>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            bg={bgColor}
            paddingTop={10}
          >
            <Flex>
            <Title
              title={"Your Account Settings"}
  
              width={"80vw"}
            />
            
            <Text class="pt-4 lg:pt-0 text-indigo-500 font-semibold">
              Welcome: email
            </Text>
          </Flex>
          <Divider m={"20px 0 20px 0"} />
            <Box bg='white' border='2px dashed grey' borderRadius='4px' p={4} color='#000' width='100%' minWidth={{md:1000}} sx={{ mt: 5, mb: 5 }}>
              <Text fontSize={{ xs: '18px', md: '24px' }} fontWeight='bold'>
                Email Addresses
              </Text>
              <Text fontSize={{ xs: '14px', md: '16px' }}>
                The following email addresses are associated with your account:
              </Text>
              <Text fontSize={{ xs: '14px', md: '16px' }}>
                Email:
              </Text>
            </Box>
            <Box bg='white' border='2px dashed grey' borderRadius='4px' p={4} color='#000' width='100%' minWidth={{md:1000}} sx={{ mt: 5, mb: 5 }}>
              <Text fontSize={{ xs: '18px', md: '24px' }} fontWeight='bold'>
              Delete Account
              </Text>
              <Text fontSize={{ xs: '14px', md: '16px' }}>
              You can delete your account by clicking "Delete account" below.
              </Text>
              <Text fontSize={{ xs: '14px', md: '16px' }}>
              Please note: this action cannot be undone and all data associated with this account will be lost forever.
              </Text>
              <Button bg='red' color='#fff'>
                Delete
              </Button>
            </Box>
          </Flex>
        </Container>
      </>
    );
  }
  