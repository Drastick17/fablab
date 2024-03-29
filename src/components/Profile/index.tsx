import * as React from "react";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MailChange from "./modules/mailChange";
import PasswordChange from "./modules/passwordChange";

import style from "./style.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className={style.main} component="main" maxWidth="xl">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "90%",
        }}
        className={style.contend}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", minWidth: "15%" }}
        >
          <Tab className={style.vertical} label="Cambiar correo" {...a11yProps(0)} />
          <Tab className={style.vertical} label="Cambiar contraseña" {...a11yProps(1)} />
        </Tabs>
        <div className={style.center}>
          <TabPanel value={value} index={0}>
            <MailChange />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PasswordChange />
          </TabPanel>
        </div>
      </Box>
    </Container>
  );
}
