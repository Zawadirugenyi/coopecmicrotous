import React from 'react';
import { Box, Grid, Heading, Text, Button } from '@chakra-ui/react';
import heroImage from '../Components/Assetes/home2.jpg'; // Corrigé la faute de frappe dans 'Assetes'

const AboutUsSection = () => {
  return (
    <>
      {/* Section Hero */}
      <Box
        w="100vw"
        h="50vh"
        bgImage={`url(${heroImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        borderRadius="none"
        m={0} // Retirer les marges
        p={0} // Retirer les paddings
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.6)" // Superposition sombre pour une meilleure lisibilité du texte
        />
        <Box zIndex="1" textAlign="center" color="white" p={8}>
          <Heading as="h1" size="2xl" mb={4}>
            À propos de nous
          </Heading>
        </Box>
      </Box>

      {/* Section À propos de nous */}
      <Box id="about-us" p={8} bg="gray.100">
        {/* Carte principale */}
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          bg="white"
          p={8}
          mb={8} // Marge pour séparer des autres sections
        >
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="#2a8fc1">
            Qui sommes-nous ?
          </Heading>

          {/* Grille des trois cartes */}
          <Grid
            templateColumns={{
              base: '1fr', // Colonne unique sur les écrans plus petits
              md: '1fr 1fr 1fr', // Trois colonnes sur les écrans moyens et plus grands
            }}
            gap={8}
            alignItems="stretch"
          >
            {/* Carte Qui sommes-nous ? */}
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              p={8}
              height="auto"
            >
              <Heading as="h3" size="lg" mb={4}>
                Qui sommes-nous ?
              </Heading>
              <Text mb={4} fontSize="lg">
             Nous sommes une coopérative d’épargne et de crédit engagée à améliorer l’inclusion financière et le bien-être économique de nos membres. Notre équipe de professionnels dévoués œuvre chaque jour pour offrir des services financiers fiables, accessibles et de qualité. Forts de notre expérience, nous proposons des solutions adaptées aux besoins réels de chaque membre, tout en contribuant au développement durable de la communauté.
              </Text>
            </Box>

            {/* Carte Mission */}
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              p={8}
              height="auto"
            >
              <Heading as="h3" size="lg" mb={4}>
                Notre mission
              </Heading>
              <Text mb={4} fontSize="lg">
               Notre mission est de collecter les épargnes de nos membres et de les gérer de manière sécurisée afin de financer leurs projets, soutenir leurs besoins financiers et favoriser leur développement économique. Nous nous engageons à offrir des services fiables, accessibles et adaptés, tout en promouvant la solidarité et l’autonomie financière au sein de notre communauté. 
            </Box>

            {/* Carte Vision */}
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              p={8}
              height="auto"
            >
              <Heading as="h3" size="lg" mb={4}>
                Notre vision
              </Heading>
              <Text mb={4} fontSize="lg">
               Notre vision est de bâtir un futur sans pauvreté, où chaque membre de la COOPEC Microtous a accès à des services financiers fiables et adaptés pour améliorer sa vie. Nous aspirons à être une coopérative reconnue pour son innovation, sa solidarité et son engagement à soutenir la réussite économique de tous nos membres.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AboutUsSection;
