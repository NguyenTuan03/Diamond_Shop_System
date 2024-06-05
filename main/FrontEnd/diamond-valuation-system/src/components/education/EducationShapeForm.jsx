import { Box, Center, Image, Text } from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      <Text fontSize={"xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
        {title}
      </Text>
      <Center m={"20px 0 0 0"}>
        <LazyLoadImage src={image} effect="blur" />
      </Center>
      <Text fontSize="lg">{description}</Text>
      <Text fontSize="lg">
        <strong>Length to width ratio:</strong> {lengthToWidthRatio}
      </Text>
      <Box m={"20px 0 20px 0"} p={4} bg={"blue.100"}>
        <Text fontSize="lg">
          <strong>Pro Tip:</strong> {proTip}
        </Text>
      </Box>
      <Text fontSize="lg">
        <strong>Strong points:</strong> {strongPoints}
      </Text>
      <Text fontSize="lg">
        <strong>Sample cost</strong> ({sampleCost}):{" "}
        <strong>${sampleCostPrice}</strong>.
      </Text>
    </>
  );
}
