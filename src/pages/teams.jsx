import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from '@chakra-ui/react';
import PageHero from '../Components/PageHero';
import { teamMembersData, localize } from '../data';
import teamLogo from '../Components/Assetes/photo_5992532938148922968_x__1_-removebg-preview.png';
import aboutImage from '../Components/Assetes/Gerante1.jpeg';

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const teamMembers = teamMembersData.map((m) => localize(m, i18n.language));
  const memberImages = { 'Nadine Karungi': aboutImage };

  return (
    <Box pb={16}>
      <PageHero title={t('teams.heroTitle')} subtitle={t('teams.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('teams.title')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={8}>
            {teamMembers.map((member) => (
              <Box key={member.id} textAlign="center">
                <Flex
                  w={{ base: '90px', md: '120px' }}
                  h={{ base: '90px', md: '120px' }}
                  mx="auto"
                  borderRadius="full"
                  overflow="hidden"
                  bg="white"
                  boxShadow="lg"
                  border="4px solid"
                  borderColor="accent.400"
                >
                  <Image src={memberImages[member.name] || teamLogo} alt={member.name} objectFit="cover" w="100%" h="100%" />
                </Flex>
                <Heading as="h3" size="sm" mt={4} mb={1}>
                  {member.name}
                </Heading>
                <Text fontSize="sm" color="text.muted">
                  {member.role}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default TeamSection;