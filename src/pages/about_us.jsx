import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Heading, Text, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { FaHandsHelping, FaHandshake, FaShieldAlt, FaAward } from 'react-icons/fa';
import PageHero from '../Components/PageHero';

const AboutUsSection = () => {
  const { t } = useTranslation();

  const cards = [
    { title: t('about.who'), text: t('about.whoText') },
    { title: t('about.mission'), text: t('about.missionText') },
    { title: t('about.vision'), text: t('about.visionText') },
  ];

  const values = [
    { icon: FaHandsHelping, title: t('about.value1Title'), text: t('about.value1Text') },
    { icon: FaHandshake, title: t('about.value2Title'), text: t('about.value2Text') },
    { icon: FaShieldAlt, title: t('about.value3Title'), text: t('about.value3Text') },
    { icon: FaAward, title: t('about.value4Title'), text: t('about.value4Text') },
  ];

  return (
    <Box pb={16}>
      <PageHero title={t('about.heroTitle')} subtitle={t('home.aboutTitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('about.who')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={8}>
            {cards.map((card, index) => (
              <Box
                key={index}
                bg="surface.base"
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor="border.subtle"
                boxShadow="sm"
                transition="transform 0.25s ease, boxShadow 0.25s ease"
                _hover={{ transform: 'translateY(-6px)', boxShadow: 'xl' }}
              >
                <Box w="56px" h="6px" bg="accent.400" borderRadius="full" mb={6} />
                <Heading as="h3" size="lg" mb={4}>
                  {card.title}
                </Heading>
                <Text color="text.soft" fontSize="md">
                  {card.text}
                </Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.base">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('about.valuesTitle')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {values.map((value, index) => (
              <Box
                key={index}
                bg="surface.muted"
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor="border.subtle"
                boxShadow="sm"
                transition="transform 0.25s ease, boxShadow 0.25s ease"
                _hover={{ transform: 'translateY(-6px)', boxShadow: 'xl' }}
                textAlign="center"
              >
                <Flex
                  w="64px"
                  h="64px"
                  mx="auto"
                  borderRadius="full"
                  bg="brand.500"
                  color="white"
                  align="center"
                  justify="center"
                  mb={6}
                >
                  <Icon as={value.icon} boxSize={7} />
                </Flex>
                <Heading as="h3" size="md" mb={3}>
                  {value.title}
                </Heading>
                <Text color="text.soft" fontSize="sm">
                  {value.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsSection;