import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, SimpleGrid, Stack, HStack, Icon, Divider } from '@chakra-ui/react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import PageHero from '../Components/PageHero';
import { activitiesData, localize } from '../data';

const ActivitiesSection = () => {
  const { t, i18n } = useTranslation();
  const activities = activitiesData.map((a) => localize(a, i18n.language));

  return (
    <Box pb={16}>
      <PageHero title={t('activities.heroTitle')} subtitle={t('activities.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('activities.title')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            {activities.map((activity) => (
              <Box
                key={activity.id}
                bg="surface.base"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="sm"
                border="1px solid"
                borderColor="border.subtle"
                transition="transform 0.25s ease, boxShadow 0.25s ease"
                _hover={{ transform: 'translateY(-6px)', boxShadow: 'xl' }}
              >
                <Box bgGradient="linear(to-r, brand.500, brand.700)" p={8} color="white">
                  <Heading as="h3" size="md" color="white" mb={2}>
                    {activity.name}
                  </Heading>
                  <Box h="5px" w="44px" bg="accent.400" borderRadius="full" />
                </Box>
                <Stack spacing={4} p={8}>
                  <Text color="text.muted" fontSize="sm">
                    {activity.description}
                  </Text>
                  <Divider />
                  <HStack spacing={2} color="text.muted" fontSize="sm">
                    <Icon as={FaCalendarAlt} color="brand.500" />
                    <Text>{activity.date}</Text>
                  </HStack>
                  <HStack spacing={2} color="text.muted" fontSize="sm">
                    <Icon as={FaClock} color="brand.500" />
                    <Text>
                      {activity.start_hour} - {activity.end_hour}
                    </Text>
                  </HStack>
                  <HStack spacing={2} color="text.muted" fontSize="sm">
                    <Icon as={FaMapMarkerAlt} color="brand.500" />
                    <Text>{activity.venue}</Text>
                  </HStack>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default ActivitiesSection;