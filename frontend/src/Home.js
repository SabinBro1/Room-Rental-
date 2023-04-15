import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Flex as="nav" p={4}>
        <Heading size="md" color="teal">GharBhada</Heading>
        <Spacer />
        <Button as={Link} to="/login" colorScheme="teal" variant="outline" mr={2}>
          Login
        </Button>
        <Button as={Link} to="/register" colorScheme="teal">
          Signup
        </Button>
      </Flex>
      <Container maxW="container.xl" py={16}>
        <Heading as="h1" size="4xl" mb={8}>
          Welcome to GharBhada
        </Heading>
        <Heading as="h2" size="2xl">
        Find Your Space, Embrace Your Place<br></br>
        Unrivaled Room Rentals at Your Fingertips!
        </Heading>
      </Container>
    </Box>
  );
};

export default Home
