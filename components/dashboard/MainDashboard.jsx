// MainDashboard.js

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DashboardFirstComponent from "./MainDashboard/DashboardFirstComponent";
import DashboardSecondComponent from "./MainDashboard/DashboardSecondComponent";
import TabsActiveInactive from "./MainDashboard/TabsActiveInactive";
import CompanyTable from "./MainDashboard/CompanyTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainDashboard() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <DashboardFirstComponent />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <DashboardSecondComponent />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <h4>Dashboard / Company</h4>
          <Item>
            <TabsActiveInactive
              value={selectedTab}
              handleChange={handleChangeTab}
            />
            <Box sx={{ display: selectedTab === 0 ? "block" : "none" }}>
              {/* All Companies */}
              <CompanyTable />
            </Box>
            <Box sx={{ display: selectedTab === 1 ? "block" : "none" }}>
              {/* Active Companies */}
              <CompanyTable statusFilter="active" />
            </Box>
            <Box sx={{ display: selectedTab === 2 ? "block" : "none" }}>
              {/* Inactive Companies */}
              <CompanyTable statusFilter="inactive" />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item> </Item>
        </Grid>
      </Grid>
    </Box>
  );
}