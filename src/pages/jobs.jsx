import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, Button, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PageHero from '../Components/PageHero';
import { jobsData, localize } from '../data';

const JobsSection = () => {
  const { t, i18n } = useTranslation();
  const jobs = jobsData.map((j) => localize(j, i18n.language));
  const navigate = useNavigate();

  const handleApply = (jobId) => {
    navigate(`/application/${jobId}`);
  };

  return (
    <Box pb={16}>
      <PageHero title={t('jobs.heroTitle')} subtitle={t('jobs.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('jobs.title')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          {jobs.length === 0 ? (
            <Box
              bg="surface.base"
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="border.subtle"
              p={{ base: 12, md: 16 }}
              textAlign="center"
            >
              <Text color="text.soft" fontSize="lg" mb={6}>
                {t('jobs.comingSoon')}
              </Text>
              <Button
                as="a"
                href="mailto:info@microtous.com,support@microtous.com?subject=Internship%20Request"
                size="lg"
                colorScheme="brand"
              >
                {t('internship.cta')}
              </Button>
            </Box>
          ) : (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {jobs.map((job) => (
              <Box
                key={job.id}
                bg="surface.base"
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor="border.subtle"
                boxShadow="sm"
                display="flex"
                flexDirection="column"
                transition="transform 0.25s ease, boxShadow 0.25s ease"
                _hover={{ transform: 'translateY(-6px)', boxShadow: 'xl' }}
              >
                <Flex
                  w="52px"
                  h="52px"
                  borderRadius="xl"
                  bg="brand.50"
                  color="brand.500"
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={FaUsers} boxSize={6} />
                </Flex>
                <Heading as="h3" size="md" mb={3}>
                  {job.title}
                </Heading>
                <Text color="text.muted" fontSize="sm" mb={6} flex="1">
                  {job.description}
                </Text>
                <Button colorScheme="brand" size="sm" alignSelf="flex-start" onClick={() => handleApply(job.id)}>
                  {t('jobs.apply')}
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default JobsSection;