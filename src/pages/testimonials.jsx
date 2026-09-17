import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Heading, Text, Flex, IconButton, HStack, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import PageHero from '../Components/PageHero';
import { testimonialsData, localize } from '../data';

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const testimonials = testimonialsData.map((m) => localize(m, i18n.language));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box pb={16}>
      <PageHero title={t('testimonials.heroTitle')} subtitle={t('testimonials.subtitle')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="5xl">
          <Box maxW="700px" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              {t('testimonials.title')}
            </Heading>
            <Box w="56px" h="5px" bg="brand.500" borderRadius="full" mx="auto" mt={4} />
          </Box>
          <Box
            bg="surface.base"
            borderRadius="2xl"
            border="1px solid"
            borderColor="border.subtle"
            boxShadow="sm"
            p={{ base: 8, md: 14 }}
            position="relative"
            overflow="hidden"
          >
            <AnimatePresence mode="wait">
              {testimonials.length > 0 && (
                <motion.div
                  key={testimonials[currentIndex]?.id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                >
                  <Box textAlign="center">
                    <Icon as={FaQuoteLeft} boxSize={9} color="accent.400" mb={5} mx="auto" />
                    <Text
                      fontSize={{ base: 'lg', md: 'xl' }}
                      color="text.soft"
                      fontStyle="italic"
                      maxW="720px"
                      mx="auto"
                      mb={6}
                    >
                      "{testimonials[currentIndex]?.text}"
                    </Text>
                    <Text fontWeight="700" fontSize="lg" color="brand.600">
                      {testimonials[currentIndex]?.name}
                    </Text>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
          <Flex justify="center" align="center" mt={8} gridGap={4}>
            <IconButton
              aria-label="Previous"
              icon={<ChevronLeftIcon />}
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              variant="outline"
              color="brand.500"
              size="sm"
            />
            <HStack spacing={2}>
              {testimonials.length > 0 &&
                testimonials.map((_, index) => (
                  <Box
                    key={index}
                    as="button"
                    width={currentIndex === index ? '26px' : '10px'}
                    height="10px"
                    borderRadius="full"
                    bg={currentIndex === index ? 'brand.500' : 'gray.300'}
                    transition="all 0.3s ease"
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
            </HStack>
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon />}
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              variant="outline"
              color="brand.500"
              size="sm"
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;