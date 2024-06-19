import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import Natural from "./natural/Natural";
import LabGrown from "./labGrown/LabGrown";

export default function Prices() {
  return (
    <>
      <Tabs variant="enclosed">
        <TabList justifyContent={"center"}>
          <Tab>Natural</Tab>
          <Tab>Lab Grown</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Natural />
          </TabPanel>
          <TabPanel>
            <LabGrown />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
