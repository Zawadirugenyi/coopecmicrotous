import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Heading, Text, Button, Card, CardBody } from '@chakra-ui/react';
import backgroundImage from '../Components/Assetes/home3.jpg'; // Path to your services background image
import heroImage from '../Components/Assetes/home1.webp'; // Path to your hero section image

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://microtousadmin.onrender.com/api/services/');
        setServices(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to fetch services. Please try again.');
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        w="100vw"
        h="40vh"
        bgImage={`url(${heroImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        m={0}
        p={0}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.6)" // Dark overlay for better text readability
        />
        <Box zIndex="1" textAlign="center" color="white" p={8}>
          <Heading as="h1" size="2xl" mb={4}>
           Our Services
          </Heading>
    
        </Box>
      </Box>

      {/* Services Section */}
      <Box
        id="services"
        p={8}
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPos="center"
        color="white"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          What We offer
        </Heading>
        {error && <Text color="red.500" mb={4}>{error}</Text>}
        <Box
          p={6}
          bg="rgba(0, 0, 0, 0.6)"
          borderRadius="lg"
          boxShadow="lg"
          maxW="1300px"
          mx="auto"
        >
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={6}>
            {services.map((service, index) => (
              <Card key={index} bg="white" color="black" boxShadow="md" borderRadius="md">
                <CardBody>
                  <Heading as="h3" size="md" mb={4}>
                    {service.name}
                  </Heading>
                  <Text mb={4}>{service.description}</Text>
                  <Button
                    color="#2a8fc1"
                    size="lg"
                    _hover={{ bg: 'yellow.200' }}
                    px={8}
                    as="a"
                    href="epargne"
                    mt="10px"
                  >
                    En savoir plus
                  </Button>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ServicesSection;
