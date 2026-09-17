import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import PageHero from '../Components/PageHero';

const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <Box pb={16}>
      <PageHero title={t('faq.heroTitle')} subtitle={t('faq.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="5xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('faq.title')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <Box
            bg="surface.base"
            borderRadius="2xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="border.subtle"
            overflow="hidden"
          >
            <Accordion allowToggle>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <AccordionItem key={n} borderColor="border.subtle">
                  <AccordionButton py={5} _expanded={{ bg: 'brand.50', color: 'brand.700' }}>
                    <Box flex="1" textAlign="left" fontWeight="600">
                      {t(`faq.q${n}`)}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={5} color="text.soft">
                    {t(`faq.a${n}`)}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQSection;