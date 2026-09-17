import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import defaultImage from "./Assetes/home1.webp";

const PageHero = ({ title, subtitle, image, height = "42vh" }) => {
  return (
    <Box
      position="relative"
      w="100%"
      height={height}
      bgImage={`url(${image || defaultImage})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, rgba(17,57,77,0.88), rgba(26,116,158,0.72))"
      />
      <Box position="relative" zIndex="1" textAlign="center" px={4}>
        <Box
          w="56px"
          h="6px"
          bg="accent.400"
          borderRadius="full"
          mx="auto"
          mb={4}
        />
        <Heading
          as="h1"
          size="2xl"
          color="white"
          textShadow="0 2px 8px rgba(0,0,0,0.25)"
        >
          {title}
        </Heading>
        {subtitle && (
          <Text
            color="whiteAlpha.900"
            mt={3}
            maxW="640px"
            mx="auto"
            fontSize={{ base: "md", md: "lg" }}
          >
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default PageHero;