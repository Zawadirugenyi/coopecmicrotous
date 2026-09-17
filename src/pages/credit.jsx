import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, SimpleGrid, Stack, Flex, Icon, Button } from '@chakra-ui/react';
import { FaUsers, FaBolt, FaFileInvoiceDollar, FaCheckCircle, FaHandshake, FaFileSignature } from 'react-icons/fa';
import PageHero from '../Components/PageHero';
import { creditData, localize, pick } from '../data';

const creditIcons = [FaUsers, FaBolt, FaFileInvoiceDollar];

const CreditSection = () => {
  const { t, i18n } = useTranslation();
  const credit = creditData.map((c) => localize(c, i18n.language));

  const specs = (item) => [
    { label: t('credit.labelTaux'), value: item.taux },
    { label: t('credit.labelRemboursement'), value: item.remboursement },
    { label: t('credit.labelEcheance'), value: item.echeance },
    { label: t('credit.labelGarantie'), value: item.garantieFinanciere },
  ];

  return (
    <Box pb={16}>
      <PageHero title={t('credit.heroTitle')} subtitle={t('credit.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="7xl">
          <Box maxW="760px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('credit.title')}
            </Heading>
            <Box w="56px" h="5px" bgGradient="linear(to-r, brand.500, accent.400)" borderRadius="full" mx="auto" mt={4} />
          </Box>

          <Flex
            align="center"
            gridGap={4}
            bg="brand.50"
            border="1px solid"
            borderColor="brand.100"
            borderRadius="2xl"
            p={6}
            mb={12}
          >
            <Flex
              w="48px"
              h="48px"
              borderRadius="2xl"
              bgGradient="linear(to-br, brand.500, brand.700)"
              color="white"
              align="center"
              justify="center"
              flexShrink={0}
              border="2px solid"
              borderColor="accent.400"
            >
              <Icon as={FaHandshake} boxSize={5} />
            </Flex>
            <Text color="brand.800" fontSize="sm">
              {t('credit.membershipNote')}
            </Text>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {credit.map((item, index) => {
              const IconComp = creditIcons[index % creditIcons.length];
              return (
                <Box
                  key={item.id}
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
                    <Flex align="center" gridGap={4} mb={6}>
                      <Flex
                        w="60px"
                        h="60px"
                        borderRadius="2xl"
                        bgGradient="linear(to-br, brand.500, brand.700)"
                        color="white"
                        align="center"
                        justify="center"
                        boxShadow="md"
                        border="2px solid"
                        borderColor="accent.400"
                        flexShrink={0}
                      >
                        <Icon as={IconComp} boxSize={6} />
                      </Flex>
                      <Heading as="h3" size="md">
                        {item.name}
                      </Heading>
                    </Flex>
                    <Text color="text.muted" fontSize="sm" mb={6}>
                      {item.description}
                    </Text>
                    <Box borderTop="1px solid" borderColor="border.subtle" pt={5}>
                      <Stack spacing={3}>
                        {specs(item).map((spec, i) => (
                          <Flex key={i} align="baseline" justify="space-between" gridGap={4}>
                            <Text
                              fontSize="xs"
                              fontWeight="700"
                              color="brand.600"
                              textTransform="uppercase"
                              letterSpacing="wide"
                              flexShrink={0}
                            >
                              {spec.label}
                            </Text>
                            <Text fontSize="sm" color="text.soft" textAlign="right">
                              {spec.value}
                            </Text>
                          </Flex>
                        ))}
                      </Stack>
                    </Box>
                    <Box mt={6} bg="surface.muted" borderRadius="lg" p={4} flex="1">
                      <Text fontSize="xs" fontWeight="700" color="brand.600" textTransform="uppercase" letterSpacing="wide" mb={3}>
                        {t('credit.conditionLabel')}
                      </Text>
                      {item.conditions && item.conditions.length > 0 ? (
                        <Stack spacing={2}>
                          {item.conditions.map((condition, i) => (
                            <Flex key={i} align="flex-start" gridGap={2}>
                              <Icon as={FaCheckCircle} color="accent.400" mt={0.5} flexShrink={0} />
                              <Text fontSize="sm" color="text.soft">
                                {pick(condition, i18n.language)}
                              </Text>
                            </Flex>
                          ))}
                        </Stack>
                      ) : (
                        <Text fontSize="sm" color="text.muted">
                          —
                        </Text>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gridGap={8}
            mt={14}
            bgGradient="linear(to-r, brand.800, brand.600)"
            borderRadius="2xl"
            p={{ base: 8, md: 12 }}
            color="white"
            boxShadow="lg"
          >
            <Box flex="1">
              <Flex align="center" gridGap={3} mb={4}>
                <Flex
                  w="44px"
                  h="44px"
                  borderRadius="2xl"
                  bg="whiteAlpha.200"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaFileSignature} boxSize={5} />
                </Flex>
                <Heading as="h3" size="md">
                  {t('credit.feesTitle')}
                </Heading>
              </Flex>
              <Stack spacing={2.5}>
                {[
                  t('credit.feeDossier'),
                  t('credit.feeDecaissement'),
                  t('credit.feeAssurance'),
                  t('credit.feeCarnet'),
                ].map((fee, i) => (
                  <Flex key={i} align="flex-start" gridGap={3}>
                    <Icon as={FaCheckCircle} color="white" mt={1} flexShrink={0} />
                    <Text color="whiteAlpha.900" fontSize="sm">
                      {fee}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
            <Button
              as="a"
              href="mailto:info@microtous.com,support@microtous.com?subject=Credit%20Application"
              size="lg"
              colorScheme="accent"
              color="brand.900"
              px={10}
              flexShrink={0}
              _hover={{ bg: 'accent.300' }}
            >
              {t('credit.applyCta')}
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default CreditSection;