import TabPanel from "@mui/lab/TabPanel";
import React from "react";

function TabPrinters3D({
  children,
  value,
}: {
  children?: React.ReactNode;
  value: string;
}) {
  return <TabPanel value={value}>{children}</TabPanel>;
}

export default TabPrinters3D;
