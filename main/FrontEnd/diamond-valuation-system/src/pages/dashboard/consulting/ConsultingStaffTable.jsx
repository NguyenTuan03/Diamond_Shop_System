import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function ConsultingStaffTable({
  processRequest,
  setViewSelectProcessRequest,
  viewProcessRequest,
}) {
  return (
    <TableContainer>
      <Table size={"sm"} colorScheme="blue">
        <Thead bg={"blue.400"}>
          <Tr>
            <Th>No</Th>
            <Th>Customer</Th>
            <Th>Services</Th>
            <Th>Created Date</Th>
            <Th>Finish Date</Th>
            <Th>Sealing Date</Th>
            <Th>Status</Th>
            <Th>View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {processRequest.map((item, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{item?.customerName}</Td>
              <Td>{item?.serviceName}</Td>
              <Td>{(item?.createdDate).slice(0, 10)}</Td>
              <Td>{item?.finishedDate.slice(0, 10)}</Td>
              <Td>{item?.sealingDate.slice(0, 10)}</Td>
              <Td>{item?.type}</Td>
              <Td>
                <IconButton
                  icon={<ViewIcon />}
                  bgColor={"transparent"}
                  onClick={() => {
                    setViewSelectProcessRequest(index);
                    viewProcessRequest.onOpen();
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
