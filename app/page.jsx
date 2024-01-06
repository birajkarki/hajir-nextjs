"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const LogoContainer = styled("div")({
  marginBottom: "16px",
});

export default function BasicGrid() {
  const isDesktop = useMediaQuery("(min-width: 600px)"); // Adjust the breakpoint as needed

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      {/* image showing grid  */}
      <Grid container={1}>
        {isDesktop && (
          <Grid item xs={12} md={6}>
            {/* Conditionally render ImageSlider on desktop screens */}
            <Image
              width={750}
              height={750}
              alt="login image"
              src="/auth/login-image-default.png"
            />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Item>
            <LogoContainer>
              <Image src="/hajir-logo.png" width={140} height={50} alt="Logo" />
            </LogoContainer>
            <div>
              <h2>Login Here</h2>
              <p style={{ whiteSpace: "pre-line" }}>
                Hajir will help you to manage your staff’s attendance,
                <br />
                payroll and personal report of your company.
              </p>
              {/* Hide the image on small and medium screens */}
              <Image
                src="/auth/sign-min.png"
                width={140}
                height={120}
                alt="Logo"
                sx={{
                  display: { xs: "none", sm: "none", md: "block" }, // Hide on xs and sm, show on md and above
                }}
              />
            </div>
            <Link href="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
