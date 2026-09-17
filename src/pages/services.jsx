import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Heading, Text, Button, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaPiggyBank, FaCoins, FaComments, FaUsers, FaArrowRight } from 'react-icons/fa';
import PageHero from '../Components/PageHero';
import { servicesData, localize } from '../data';

const serviceIcons = [FaPiggyBank, FaCoins, FaComments, FaUsers];

const serviceLinks = {
  1: '/epargne',
  2: '/credit',
  3: '/contact_us',
  4: '/about_us',
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const services = servicesData.map((s) => localize(s, i18n.language));

  return (
    <Box pb={16}>
      <PageHero title={t('services.heroTitle')} subtitle={t('services.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('services.title')}
            </Heading>
            <Box w="56px" h="5px" bgGradient="linear(to-r, brand.500, accent.400)" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {services.map((service, index) => {
              const IconComp = serviceIcons[index % serviceIcons.length];
              const to = serviceLinks[service.id] || '/services';
              return (
                <Box
                  key={service.id}
                  bg="surface.base"
                  borderRadius="2xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="border.subtle"
                  boxShadow="sm"
                  display="flex"
                  flexDirection="column"
                  transition="transform 0.25s ease, boxShadow 0.25s ease"
                  _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl' }}
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
                    <Heading as="h3" size="md" mb={3}>
                      {service.name}
                    </Heading>
                    <Text color="text.muted" fontSize="sm" mb={6} flex="1">
                      {service.description}
                    </Text>
                    <Button
                      size="sm"
                      variant="link"
                      colorScheme="brand"
                      alignSelf="flex-start"
                      rightIcon={<FaArrowRight />}
                      onClick={() => navigate(to)}
                    >
                      {t('services.more')}
                    </Button>
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
                {t('services.ctaTitle')}
              </Heading>
              <Text color="whiteAlpha.800" maxW="560px">
                {t('services.ctaText')}
              </Text>
            </Box>
            <Button
              size="lg"
              colorScheme="accent"
              color="brand.900"
              px={10}
              rightIcon={<ChevronRightIcon />}
              _hover={{ bg: 'accent.300' }}
              onClick={() => navigate('/epargne')}
            >
              {t('services.ctaBtn')}
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesSection;