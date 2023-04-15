import { useEffect, useState } from "react";
import React, { Component } from "react";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Spacer,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaLock,
  FaMobile,
  FaMapMarkerAlt,
  FaCity,
  FaEnvelope,
  FaKey,
} from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name,setName] = useState(""); 

  const [phone,setPhone] = useState(""); 

  const [address,setAddress] = useState(""); 

  const [district,setDistrict] = useState(""); 

  const [email,setEmail] = useState(""); 

  const [password,setPassword] = useState(""); 

   const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    fetch("http://localhost:8000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,   
        phone: phone, 
        address: address,
        district: district,
        email: email, 
        password: password, 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "userRegistered");
      });
  };
  
  

  

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Flex as="nav" p={4}>
          <Heading size="md" color="teal">
            <Link to="/">GharBhada</Link>
          </Heading>
          <Spacer />
        </Flex>
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Create an Account</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt color="gray.300" />}
                  />
                  <Input name="name" type="text" placeholder="Full Name" />
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // children={<FaMobile color="gray.300" />}
                  />
                    console.log(phone)
                  <PhoneInput
                  name="phoneNo"
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                  
                  
                    onChange={(e) => setPhone(Number(e.target.value))}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaMapMarkerAlt color="gray.300" />}
                  />
                  <Input name="address" type="text" placeholder="Address" />
                  value={address}
              
                  onChange={(e) => setAddress(e.target.value)}
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaCity color="gray.300" />}
                  />
                  <Input name="district" type="text" placeholder="District" />
                  value={district}
             
                  onChange={(e) => setDistrict(e.target.value)}
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaEnvelope color="gray.300" />}
                  />
                  <Input name="email" type="email" placeholder="Email address" />
                  value={email}
           
                  onChange={(e) => setEmail(e.target.value)}
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaKey color="gray.300" />}
                  />
                  <Input
                  name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  value={password}
             
                  onChange={(e) => setName(e.target.value)}
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account? <Link to="/LogIn">Login</Link>
      </Box>
    </Flex>
  );
};

export default Register;
