import { Box, Center, Image, Text } from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EducationProTip from "./EducationProTip";
export default function EducationShapeForm({
  title,
  image,
  description,
  lengthToWidthRatio,
  proTip,
  strongPoints,
  sampleCost,
  sampleCostPrice,
}) {
  return (
    <>
      <Text
        fontSize={{ base: "md", md: "lg", lg: "xl" }}
        fontWeight={"bold"}
        m={"20px 0 0 0"}
      >
        {title}
      </Text>
      <Center m={"20px 0 0 0"}>
        <LazyLoadImage src={image} effect="blur" />
      </Center>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>{description}</Text>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        <strong>Length to width ratio:</strong> {lengthToWidthRatio}
      </Text>
      <EducationProTip content={proTip} />
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        <strong>Strong points:</strong> {strongPoints}
      </Text>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        <strong>Sample cost</strong> ({sampleCost}):{" "}
        <strong>${sampleCostPrice}</strong>.
      </Text>
    </>
  );
}
