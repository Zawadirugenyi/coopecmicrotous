import React from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex } from '@chakra-ui/react';
import home3 from '../Components/Assetes/home3.jpg'; // Import the image
import heroImage from '../Components/Assetes/home1.webp';

const FAQSection = () => {
  return (
    <Box>
      
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
            FAQ (Questions fréquemment posées)
          </Heading>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" // Reduced height here
        bgImage={`url(${home3})`} // Set background image
        bgSize="cover" // Cover the entire section
        bgPosition="center" // Center the image
        p={4}
        backgroundBlendMode="overlay"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Overlay effect to make text readable
      >
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          p={8}
          width="80%"
          maxWidth="800px"
          textAlign="left"
        >
          <Heading as="h2" size="xl" mb={4}>
            Questions Fréquentes (FAQs)
          </Heading>
          <Text mb={4}>
            Trouvez des réponses aux questions les plus courantes concernant nos services bancaires, comptes, prêts et plus encore.
          </Text>

          {/* Accordion for Banking FAQ */}
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Comment ouvrir un compte Epagne ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                L'ouverture de compte est à $ 5.00 si c'est Courant $ 10.00 Maisha et $ 3.00 Epargne a la Carte; les documents à présenter sont: Photo passeport, et une copie de pièce d'identité
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Quels types de comptes Epargne proposez-vous ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               Epargne Courant, Epargne Maisha et Epargne à la Carte 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Comment puis-je demander un Credit ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Passez à La réception et remplissez fiche de demande de crédit, moyant le frais d'Etude de Dossier qui est le 1% du montant demandé
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Quels types de Crédit proposez-vous ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               Crédit Mushahara, Crédit Twekambe et Crédit Nibuthe 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Quel est le taux d'intérêt des comptes d'épargne Bloqués?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Le taux d'intérêt pour l'epargne bloqué est de 2% mensuel.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Puis-je accéder à mon compte depuis n'importe où dans le monde ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No, pour le moment c'est seulement à la RDC 
                </AccordionPanel>
            </AccordionItem>

            {/* Add more AccordionItems as needed */}
          </Accordion>

          {/* Read More Button */}
        
        </Box>
      </Flex>
    </Box>
  );
};

export default FAQSection;
