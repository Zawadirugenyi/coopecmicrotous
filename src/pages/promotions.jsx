import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, Badge } from '@chakra-ui/react';
import { FaCalendarAlt, FaCalendarTimes } from 'react-icons/fa';
import PageHero from '../Components/PageHero';
import { promotionsData, localize } from '../data';
import promoImage1 from '../Components/Assetes/home2.jpg';
import promoImage2 from '../Components/Assetes/home3.jpg';
import promoImage3 from '../Components/Assetes/1113.jpeg';

const promoImages = {
  'home2.jpg': promoImage1,
  'home3.jpg': promoImage2,
  '1113.jpeg': promoImage3,
};

const PromotionsSection = () => {
  const { t, i18n } = useTranslation();
  const promotions = promotionsData.map((p) => localize(p, i18n.language));

  return (
    <Box pb={16}>
      <PageHero title={t('promotions.heroTitle')} subtitle={t('promotions.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('promotions.title')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          {promotions.length === 0 ? (
            <Box
              bg="surface.base"
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="border.subtle"
              p={{ base: 12, md: 16 }}
              textAlign="center"
            >
              <Text color="text.soft" fontSize="lg">
                {t('promotions.comingSoon')}
              </Text>
            </Box>
          ) : (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {promotions.map((promotion) => (
              <Box
                key={promotion.id}
                bg="surface.base"
                borderRadius="2xl"
                border="1px solid"
                borderColor="border.subtle"
                boxShadow="sm"
                overflow="hidden"
                transition="transform 0.25s ease, boxShadow 0.25s ease"
                _hover={{ transform: 'translateY(-6px)', boxShadow: 'xl' }}
              >
                <Image
                  src={promoImages[promotion.image]}
                  alt={promotion.title}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                />
                <Box textAlign="center" p={8}>
                  <Heading as="h3" size="md" mb={3}>
                    {promotion.title}
                  </Heading>
                  <Text color="text.muted" fontSize="sm" mb={6}>
                    {promotion.description}
                  </Text>
                  <Flex justify="center" gap={3} flexWrap="wrap">
                    <Badge colorScheme="brand" borderRadius="full" px={4} py={1.5} fontSize="sm">
                      <Icon as={FaCalendarAlt} mr={2} />
                      {t('promotions.startDate')} {promotion.start_date}
                    </Badge>
                    <Badge colorScheme="accent" color="brand.900" borderRadius="full" px={4} py={1.5} fontSize="sm">
                      <Icon as={FaCalendarTimes} mr={2} />
                      {t('promotions.dueDate')} {promotion.end_date}
                    </Badge>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default PromotionsSection;