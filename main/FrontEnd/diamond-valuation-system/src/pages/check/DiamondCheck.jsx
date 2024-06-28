import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function DiamondCheck() {
  return (
    <Container maxW="100vw">
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
        p={{ base: 10, md: 15, lg: 20 }}
        gap={20}
      >
        <Flex direction={"column"}>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight={"bold"}
          >
            Check any diamond's
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight={"bold"}
            color={"blue.400"}
          >
            price & quality
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            m={"30px 0 50px 0"}
          >
            Transact with confidence — get fair price, cut score, visual carat
            and more
          </Text>
          <Formik
            initialValues={{ id: "", diamond: {} }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values.id);
              navigate(routes.diamondCheck + `/${values.id}`, {
                state: { valuationResultId: values.id },
              });
              setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Flex
                  direction={{ base: "column", md: "row", lg: "row" }}
                  gap={2}
                >
                  <FormControl>
                    <Input
                      name="id"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.id}
                      placeholder="Enter Valuate ID"
                      size={{ base: "sm", md: "md", lg: "lg" }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    colorScheme="blue"
                    size={{ base: "sm", md: "md", lg: "lg" }}
                  >
                    Run free check
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
      <Image
        src="https://stonealgo-3.b-cdn.net/static/dist/img/dd_2.webp"
        w={"350px"}
      />
    </Flex>
  );
}
