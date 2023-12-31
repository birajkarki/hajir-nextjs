"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Link from "next/link";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#f0f0f0", // set your desired background color
});

const StyledButton = styled(Button)({
  flexGrow: 1,
  width: "100%",
  color: "blue",
  "&:not(:last-child)": {
    marginRight: "8px", // Set the desired space between buttons
  },
});

const CompanyName = styled(Typography)({
  color: "black",
});

const CompanyHeader = ({ companyId }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <CompanyName variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Company
        </CompanyName>
        <Link href={`/dashboard/company/${companyId}/employee`}>
          <StyledButton>Employee</StyledButton>
        </Link>
        <Link href={`/dashboard/company/${companyId}/attendance`}>
          <StyledButton>Attendance</StyledButton>
        </Link>
        <Link href={`/dashboard/company/${companyId}/report`}>
          <StyledButton>Report</StyledButton>
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
};

export default CompanyHeader;
