import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Button, Stack, Divider } from '@chakra-ui/react';
import { FaPiggyBank, FaCoins, FaCreditCard, FaUserPlus, FaCheckCircle } from 'react-icons/fa';
import PageHero from '../Components/PageHero';
import { subservicesData, localize, pick } from '../data';

const savingsIcons = [FaPiggyBank, FaCoins, FaCreditCard];

const SubServicesSection = () => {
  const { t, i18n } = useTranslation();
  const subservices = subservicesData.map((s) => localize(s, i18n.language));

  return (
    <Box pb={16}>
      <PageHero title={t('epargne.heroTitle')} subtitle={t('epargne.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="760px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('epargne.title')}
            </Heading>
            <Box w="56px" h="5px" bgGradient="linear(to-r, brand.500, accent.400)" borderRadius="full" mx="auto" mt={4} mb={6} />
            <Text color="text.soft" fontSize="lg" fontStyle="italic">
              {t('epargne.intro')}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {subservices.map((subservice, index) => {
              const IconComp = savingsIcons[index % savingsIcons.length];
              return (
                <Box
                  key={subservice.id}
                  bg="surface.base"
                  borderRadius="2xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="border.subtle"
                  boxShadow="sm"
                  transition="transform 0.25s ease, boxShadow 0.25s ease"
                  _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl' }}
                  display="flex"
                  flexDirection="column"
                >
                  <Box h="6px" bgGradient="linear(to-r, brand.500, brand.700, accent.400)" />
                  <Box p={8} display="flex" flexDirection="column" flex="1">
                    <Flex
                      w="60px"
                      h="60px"
                      borderRadius="2xl"
                      bgGradient="linear(to-br, brand.500, brand.700)"
                      color="white"
                      align="center"
                      justify="center"
                      mb={6}
                      boxShadow="md"
                      border="2px solid"
                      borderColor="accent.400"
                    >
                      <Icon as={IconComp} boxSize={6} />
                    </Flex>
                    <Heading as="h3" size="md" mb={1}>
                      {subservice.name}
                    </Heading>
                    <Text fontSize="sm" color="brand.600" fontWeight="600" mb={5}>
                      {subservice.tagline}
                    </Text>
                    <Divider borderColor="border.subtle" mb={5} />
                    <Stack spacing={3} flex="1">
                      {subservice.points.map((point, i) => (
                        <Flex key={i} align="flex-start" gridGap={3}>
                          <Icon as={FaCheckCircle} color="accent.400" mt={0.5} flexShrink={0} />
                          <Text fontSize="sm" color="text.soft">
                            {pick(point, i18n.language)}
                          </Text>
                        </Flex>
                      ))}
                    </Stack>
                    {subservice.payment && (
                      <Flex
                        align="center"
                        gridGap={3}
                        mt={6}
                        bg="brand.50"
                        color="brand.700"
                        borderRadius="lg"
                        px={4}
                        py={3}
                        fontSize="sm"
                        fontWeight="600"
                      >
                        <Text>{subservice.payment}</Text>
                      </Flex>
                    )}
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>

          <Flex
            mt={14}
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gridGap={6}
            bgGradient="linear(to-r, brand.800, brand.600)"
            borderRadius="2xl"
            p={{ base: 8, md: 12 }}
            color="white"
            boxShadow="lg"
          >
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                {t('epargne.ctaTitle')}
              </Heading>
              <Text color="whiteAlpha.800" maxW="560px">
                {t('epargne.ctaText')}
              </Text>
            </Box>
            <Button
              as="a"
              href="mailto:info@microtous.com,support@microtous.com?subject=Account%20Opening%20Request"
              size="lg"
              colorScheme="accent"
              color="brand.900"
              px={10}
              leftIcon={<FaUserPlus />}
              _hover={{ bg: 'accent.300' }}
            >
              {t('epargne.ctaBtn')}
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default SubServicesSection;