import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Flex,
  Icon,
  Text,
  Skeleton,
  Button,
  Thead,
  Tbody,
  Th,
  Td,
  UnorderedList,
  ListItem,
  TableContainer,
  Table,
  Tr,
  SimpleGrid,
} from "@chakra-ui/react";
import { GiDiamondTrophy } from "react-icons/gi";
import { format, parseISO } from "date-fns";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import { fetchPendingRequestImagesByProcessRequestId } from "../../../service/ProcessRequestService";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
export default function ReceiptModal({
  viewReceipt,
  selectedValuationReceipt,
}) {
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  const [diamondImages, setDiamondImages] = useState([]);
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });
  useEffect(() => {
    if (selectedValuationReceipt) {
      console.log(selectedValuationReceipt);
      fetchPendingRequestImagesByProcessRequestId(
        selectedValuationReceipt?.processRequestId,
        setDiamondImages
      );
    }
  }, [selectedValuationReceipt]);
  return (
    <Modal
      isOpen={viewReceipt.isOpen}
      onClose={viewReceipt.onClose}
      size={"full"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Skeleton isLoaded={selectedValuationReceipt !== null}>
            <Flex gap={5}>
              <Icon as={GiDiamondTrophy} w={16} h={16} />
              <Text fontFamily={"The Nautigal"} fontSize={"5xl"}>
                DiamondVal
              </Text>
            </Flex>
          </Skeleton>
        </ModalHeader>
        <ModalBody>
          <Skeleton isLoaded={selectedValuationReceipt !== null}>
            <Flex
              direction={"column"}
              gap={5}
              p={5}
              maxW="container.lg"
              mx="auto"
            >
              {/* Header */}
              <Flex direction={"column"} align={"center"} mb={5}>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  Receipt Transaction
                </Text>
              </Flex>

              {/* Receipt Details */}
              <Flex direction={"column"} gap={3} mb={5}>
                <Text>
                  <strong>ID</strong>: {selectedValuationReceipt?.id || "N/A"}
                </Text>
                <Text>
                  <strong>Company</strong>: Diamond Valuation
                </Text>
                <Text>
                  <strong>Date Create Receipt</strong>:{" "}
                  {selectedValuationReceipt?.createdDate
                    ? format(
                        parseISO(selectedValuationReceipt?.createdDate),
                        "dd/MM/yyyy - HH:mm:ss"
                      )
                    : "N/A"}
                </Text>
                <Text>
                  <strong>RE</strong>: Diamond Valuation Receipt
                </Text>
                <Flex>
                  <Text w={"50%"}>
                    <strong>Transaction No</strong>:{" "}
                    {selectedValuationReceipt?.transactionNo || "N/A"}
                  </Text>
                  <Text>
                    <strong>Payment Date</strong>:{" "}
                    {selectedValuationReceipt?.paymentDate
                      ? format(
                          parseISO(selectedValuationReceipt?.paymentDate),
                          "dd/MM/yyyy - HH:mm:ss"
                        )
                      : "N/A"}
                  </Text>
                </Flex>
                <Flex>
                  <Text w={"50%"}>
                    <strong>Bank</strong>:{" "}
                    {selectedValuationReceipt?.bank || "N/A"}
                  </Text>
                  <Text>
                    <strong>Amount</strong>:{" "}
                    {selectedValuationReceipt?.amount || "N/A"} VND
                  </Text>
                </Flex>
                <Text>
                  <strong>Order Info</strong>:{" "}
                  {selectedValuationReceipt?.orderInfo || "N/A"}
                </Text>
              </Flex>

              <Text fontWeight={"bold"} fontStyle={"italic"}>RELATED PARIES :</Text>
              <Flex justify={"space-between"} mb={5}>
                <Flex direction={"column"} align={"start"} gap={2} flex="1">
                  <Text fontWeight={"bold"} >Customer Side (Send diamond)</Text>
                  <UnorderedList spacing={1}>
                    <ListItem fontWeight={"bold"}>
                      Customer:{" "}
                      <strong  style={{fontFamily: "'Lucida Calligraphy', cursive" }}>
                        {selectedValuationReceipt?.customerName ||
                          "N/A"}
                      </strong>
                    </ListItem>
                    <ListItem>
                     <strong>Phone: </strong> {selectedValuationReceipt?.customerPhone || "N/A"}
                    </ListItem>
                  </UnorderedList>
                </Flex>
                <Flex direction={"column"} align={"start"} gap={2} flex="1">
                  <Text fontWeight={"bold"}>
                    Company Side (Receive diamond)
                  </Text>
                  <UnorderedList spacing={1}>
                    <ListItem fontWeight={"bold"}>
                      Staff:{" "}
                      <strong  style={{fontFamily: "'Lucida Calligraphy', cursive" }}>
                        {selectedValuationReceipt?.consultingStaffName ||
                          "N/A"}
                      </strong>
                    </ListItem>
                    <ListItem>
                      <strong>Phone: </strong>
                      {selectedValuationReceipt?.consultingStaffPhone || "N/A"}
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
              <Text mb={5}>
                Both are agreed about giving and receiving the diamond below.
              </Text>
              <TableContainer mb={5}>
                <Table size={"sm"} colorScheme="blue">
                  <Thead bg={"blue.400"}>
                    <Tr>
                      <Th>No</Th>
                      <Th>Type</Th>
                      <Th>Quantity</Th>
                      <Th>Description</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>Diamond</Td>
                      <Td>1</Td>
                      <Td>{selectedValuationReceipt?.description || "N/A"}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              {/* Diamond Images */}
              <SimpleGrid columns={4} spacing={5} mb={5}>
                {diamondImages.map((image, index) => (
                  <Flex direction={"column"} key={index}>
                    <AdvancedImage
                      cldImg={cld
                        .image(image)
                        .resize(thumbnail().width(200).height(200))}
                      plugins={[lazyload(), placeholder({ mode: "blur" })]}
                    />
                  </Flex>
                ))}
              </SimpleGrid>

              {/* Footer */}
              <Text mb={5}>
                Company side confirmed that Customer side has given the right
                diamond with the correct quantity.
              </Text>
              <Text mb={5}>
                Both are agreed to the above information and signed below. The
                receipt will be copied for both sides. Each will receive a copy,
                and they both have the same validity.
              </Text>
              <Flex justify={"space-between"} px={10} fontWeight={"bold"}>
                <Flex direction={"column"} align={"center"} gap={2}>
                  <Text>Customer side</Text>
                  <Text>Signature</Text>
                </Flex>
                <Flex direction={"column"} align={"center"} gap={2}>
                  <Text>Company side</Text>
                  <Text>Signature</Text>
                </Flex>
              </Flex>
            </Flex>
          </Skeleton>
        </ModalBody>
        <ModalFooter>
          <Skeleton isLoaded={selectedValuationReceipt !== null}>
            <Flex justify={"flex-end"} p={5}>
              {isUsers &&
                user.userAuth.authorities[0].authority ===
                  "Consulting staff" && (
                  <Button
                    onClick={() => {
                      window.print();
                    }}
                  >
                    Print
                  </Button>
                )}
            </Flex>
          </Skeleton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
