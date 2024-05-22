import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const toast = useToast();
  const handleSubmitImage = () => {
    toast({
      title: "Image submitted",
      description: "Your diamond image has been submitted successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      <FormControl w={"auto"} isRequired>
        <FormLabel
          display={"inline-block"}
          cursor={"pointer"}
          bgColor={"blue.100"}
          borderRadius={"10px"}
          _hover={{ bgColor: "blue.200" }}
          m={"10px"}
          p={3}
        >
          Upload your diamond image
        </FormLabel>
        <Input
          type="file"
          name="diamondImage"
          borderRadius={"10px"}
          overflow={"hidden"}
          opacity={0}
          position={"absolute"}
          bgColor={"blue"}
          width={"0.1px"}
          height={"0.1px"}
          onChange={(e) => {
            setSelectedImage(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
      </FormControl>
      {selectedImage && (
        <Flex direction={"column"} alignItems={"center"} gap={2}>
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="not found"
            w={"500px"}
          />
          <Button colorScheme={"red"} onClick={() => setSelectedImage(null)}>
            Remove Image
          </Button>
          <Button colorScheme="green" onClick={handleSubmitImage}>
            Submit
          </Button>
        </Flex>
      )}
    </>
  );
}
