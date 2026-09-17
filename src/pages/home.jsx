import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Grid,
  SimpleGrid,
  Image,
  Flex,
  Icon,
  Stack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  useToast,
  HStack,
  Badge,
  useAccordionItemState,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPiggyBank,
  FaCoins,
  FaComments,
  FaUsers,
  FaQuoteLeft,
  FaCalendarAlt,
  FaCalendarTimes,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaStar,
  FaQuestion,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import backgroundImage1 from '../Components/Assetes/home1.webp';
import backgroundImage2 from '../Components/Assetes/111.webp';
import backgroundImage3 from '../Components/Assetes/home3.jpg';
import backgroundImage4 from '../Components/Assetes/1113.jpeg';
import teamLogo from '../Components/Assetes/photo_5992532938148922968_x__1_-removebg-preview.png';
import promoImage2 from '../Components/Assetes/home2.jpg';
import aboutImage from '../Components/Assetes/Gerante1.jpeg';
import {
  servicesData,
  promotionsData,
  testimonialsData,
  teamMembersData,
  localize,
} from '../data';

const SectionHeading = ({ kicker, title, subtitle, align = 'center', light = false }) => (
  <Box mb={12} textAlign={align} mx={align === 'center' ? 'auto' : 0}>
    {kicker && (
      <Text
        fontSize="sm"
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing="0.12em"
        color={light ? 'accent.400' : 'brand.500'}
        mb={3}
      >
        {kicker}
      </Text>
    )}
    <Heading as="h2" size="xl" color={light ? 'white' : 'gray.800'}>
      {title}
    </Heading>
    <Box
      w="56px"
      h="5px"
      bg={light ? 'accent.400' : 'brand.500'}
      borderRadius="full"
      mx={align === 'center' ? 'auto' : 0}
      mt={4}
    />
    {subtitle && (
      <Text
        mt={4}
        color={light ? 'whiteAlpha.800' : 'gray.500'}
        maxW="680px"
        mx={align === 'center' ? 'auto' : 0}
        fontSize="md"
      >
        {subtitle}
      </Text>
    )}
  </Box>
);

const serviceIcons = [FaPiggyBank, FaCoins, FaComments, FaUsers];
const heroSlides = [backgroundImage1, backgroundImage2, backgroundImage3];

const serviceLinks = {
  1: '/epargne',
  2: '/credit',
  3: '/contact_us',
  4: '/about_us',
};

const FAQItemContent = ({ n }) => {
  const { t } = useTranslation();
  const { isExpanded } = useAccordionItemState();

  return (
    <>
      <AccordionButton
        py={5}
        px={6}
        _hover={{ bg: 'brand.50' }}
        _expanded={{ bg: 'brand.600', color: 'white', boxShadow: 'md' }}
      >
        <Flex flex="1" textAlign="left" align="center" gridGap={4}>
          <Flex
            w="40px"
            h="40px"
            borderRadius="lg"
            bg={isExpanded ? 'accent.400' : 'brand.50'}
            color={isExpanded ? 'brand.900' : 'brand.500'}
            align="center"
            justify="center"
            flexShrink={0}
          >
            <Icon as={FaQuestion} boxSize={4} />
          </Flex>
          <Text fontWeight="600">{t(`faq.q${n}`)}</Text>
        </Flex>
        <AccordionIcon color="accent.400" />
      </AccordionButton>
      <AccordionPanel pb={6} px={6} color="text.soft">
        <Box pl={14}>{t(`faq.a${n}`)}</Box>
      </AccordionPanel>
    </>
  );
};

const FAQItem = ({ n }) => (
  <AccordionItem
    bg="surface.base"
    border="1px solid"
    borderColor="border.subtle"
    borderRadius="2xl"
    boxShadow="sm"
    mb={4}
    overflow="hidden"
  >
    <FAQItemContent n={n} />
  </AccordionItem>
);

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();

  const services = servicesData.map((s) => localize(s, i18n.language));
  const promotions = promotionsData.map((p) => localize(p, i18n.language));
  const testimonials = testimonialsData.map((tm) => localize(tm, i18n.language));
  const teamMembers = teamMembersData.map((m) => localize(m, i18n.language));

  const featuredTeam = ['Jean Rugenyi', 'Abijah Kasereka', 'Irène Savo', 'Nadine Karungi']
    .map((name) => teamMembers.find((m) => m.name === name))
    .filter(Boolean);

  const memberImages = { 'Nadine Karungi': aboutImage };

  const promoImages = {
    'home2.jpg': promoImage2,
    'home3.jpg': backgroundImage3,
    '1113.jpeg': backgroundImage4,
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const initials = testimonials[testimonialIndex]
    ? testimonials[testimonialIndex].name
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '';
  const contactForm = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_u249j16',
        'template_sty9mnt',
        contactForm.current,
        'YnzlhG7bfYsDDM0vz'
      )
      .then(
        () => {
          setIsSubmitting(false);
          contactForm.current.reset();
          toast({
            title: t('contact.success'),
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'top',
          });
        },
        (error) => {
          console.error('EMAILJS ERROR', error.text);
          setIsSubmitting(false);
          toast({
            title: t('contact.error'),
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: 'top',
          });
        }
      );
  };

  return (
    <Box>
      {/* ===================== HERO ===================== */}
      <Box
        position="relative"
        w="100%"
        h={{ base: '75vh', md: '88vh' }}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="brand.900"
      >
        <Box
          display="flex"
          width="300%"
          transform={`translateX(-${slideIndex * 33.3333}%)`}
          transition="transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)"
          position="absolute"
          top="0"
          left="0"
          height="100%"
        >
          {heroSlides.map((src, index) => (
            <Box
              key={index}
              flex="none"
              width="33.3333%"
              height="100%"
              backgroundImage={`url(${src})`}
              backgroundSize="cover"
              backgroundPosition="center"
            />
          ))}
        </Box>
        <Box position="absolute" inset="0" bgGradient="linear(to-b, rgba(16,56,75,0.82), rgba(42,143,193,0.55))" />

        <Stack
          position="relative"
          zIndex="2"
          textAlign="center"
          align="center"
          spacing={5}
          px={4}
          maxW="820px"
        >
          <Text
            bg="whiteAlpha.200"
            border="1px solid"
            borderColor="whiteAlpha.400"
            color="white"
            borderRadius="full"
            px={5}
            py={1}
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.08em"
            textTransform="uppercase"
            backdropFilter="blur(4px)"
          >
            {t('home.heroBadge')}
          </Text>
          <Heading
            as="h1"
            color="white"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="700"
            textShadow="0 3px 12px rgba(0,0,0,0.35)"
          >
            {t('home.heroWelcome')}
          </Heading>
          <Text
            color="whiteAlpha.900"
            fontSize={{ base: 'md', md: 'xl' }}
            maxW="560px"
          >
            {t('hero.message')}
          </Text>
          <HStack spacing={4} pt={2} flexWrap="wrap" justify="center">
            <Button
              size="lg"
              colorScheme="accent"
              color="brand.900"
              _hover={{ bg: 'accent.300' }}
              onClick={() => navigate('/services')}
            >
              {t('home.heroCta1')}
            </Button>
            <Button size="lg" variant="outline" colorScheme="whiteAlpha" color="white" _hover={{ bg: 'whiteAlpha.200' }}
              onClick={() => navigate('/contact_us')}
            >
              {t('home.heroCta2')}
            </Button>
          </HStack>
        </Stack>

        <HStack spacing={2} position="absolute" bottom="28px" zIndex={2}>
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              as="button"
              width={slideIndex === index ? '26px' : '10px'}
              height="10px"
              borderRadius="full"
              bg={slideIndex === index ? 'accent.400' : 'whiteAlpha.600'}
              transition="all 0.3s ease"
              onClick={() => setSlideIndex(index)}
            />
          ))}
        </HStack>
      </Box>

      {/* ===================== ABOUT ===================== */}
      <Box as="section" id="about-us" py={{ base: 16, md: 24 }} bg="surface.base">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 10, lg: 16 }} alignItems="center">
            <Box>
              <Box position="relative" zIndex={0}>
                <Box
                  position="absolute"
                  inset="0"
                  transform="translate(18px, 18px)"
                  bg="brand.100"
                  borderRadius="2xl"
                  zIndex={-1}
                  display={{ base: 'none', md: 'block' }}
                />
                <Box borderRadius="2xl" overflow="hidden" boxShadow="2xl" position="relative">
                  <Image
                    src={aboutImage}
                    alt={t('home.aboutTitle')}
                    objectFit="cover"
                    objectPosition="center top"
                    w="100%"
                    h={{ base: '340px', md: '460px' }}
                  />
                  <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-t, brand.900, transparent 55%)"
                  />
                  <Box position="absolute" bottom={0} left={0} right={0} p={6} color="white">
                    <Box w="56px" h="5px" bg="accent.400" borderRadius="full" mb={3} />
                    <Heading as="h3" size="lg" color="white">
                      {t('home.aboutTitle')}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <SectionHeading
                kicker={t('home.aboutTitle')}
                title={t('home.aboutTitle')}
                align="left"
              />
              <Text mb={4} fontSize="lg" color="text.soft">
                {t('home.aboutP1')}
              </Text>
              <Text mb={8} fontSize="lg" color="text.soft">
                {t('home.aboutP2')}
              </Text>
              <Button size="lg" colorScheme="brand" onClick={() => navigate('/about_us')}>
                {t('home.aboutMore')}
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* ===================== SERVICES ===================== */}
      <Box as="section" id="services" py={{ base: 16, md: 24 }} bg="surface.muted">
        <Container maxW="7xl">
          <SectionHeading
            kicker={t('nav.services')}
            title={t('home.servicesTitle')}
            subtitle={t('home.servicesSubtitle')}
          />
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
                  transition="transform 0.25s ease, boxShadow 0.25s ease"
                  _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl' }}
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                  onClick={() => navigate(to)}
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
                    <Text color="text.muted" fontSize="sm" flex="1">
                      {service.description}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
          <Flex justify="center" pt={10}>
            <Button
              size="lg"
              colorScheme="brand"
              px={10}
              onClick={() => navigate('/services')}
            >
              {t('home.heroCta1')}
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* ===================== PROMOTIONS ===================== */}
      {promotions.length > 0 && (
        <Box as="section" id="promotions" py={{ base: 16, md: 24 }} bg="surface.base">
        <Container maxW="7xl">
          <SectionHeading
            kicker={t('nav.promotions')}
            title={t('home.promotionsTitle')}
            subtitle={t('home.promotionsSubtitle')}
          />
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {promotions.map((promotion) => (
              <Box
                key={promotion.id}
                bg="surface.muted"
                borderRadius="2xl"
                border="1px solid"
                borderColor="border.subtle"
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
          <Flex justify="center" pt={10}>
            <Button
              size="lg"
              colorScheme="accent"
              color="brand.900"
              px={10}
              _hover={{ bg: 'accent.300' }}
              onClick={() => navigate('/promotions')}
            >
              {t('nav.promotions')}
            </Button>
          </Flex>
        </Container>
        </Box>
      )}

      {/* ===================== INTERNSHIP ===================== */}
      <Box as="section" id="internship" py={{ base: 16, md: 24 }} bg="brand.900" bgImage={`url(${backgroundImage4})`} bgBlendMode="overlay" bgSize="cover" bgPos="center">
        <Container maxW="6xl" textAlign="center">
          <Flex
            w="80px"
            h="80px"
            mx="auto"
            borderRadius="full"
            bg="accent.400"
            color="brand.900"
            align="center"
            justify="center"
            mb={8}
            boxShadow="lg"
          >
            <Icon as={FaGraduationCap} boxSize={9} />
          </Flex>
          <Heading as="h2" size="2xl" color="white" mb={4}>
            {t('internship.title')}
          </Heading>
          <Text color="whiteAlpha.800" fontSize="lg" maxW="620px" mx="auto" mb={8}>
            {t('internship.subtitle')}
          </Text>
          <Button
            as="a"
            href="mailto:info@microtous.com,support@microtous.com?subject=Internship%20Request"
            size="lg"
            colorScheme="accent"
            color="brand.900"
            px={12}
            _hover={{ bg: 'accent.300' }}
          >
            {t('internship.cta')}
          </Button>
        </Container>
      </Box>

      {/* ===================== TESTIMONIALS ===================== */}
      <Box as="section" id="testimonials" py={{ base: 16, md: 24 }} bg="surface.base">
        <Container maxW="5xl">
          <SectionHeading
            kicker={t('nav.testimonials')}
            title={t('home.testimonialsTitle')}
            subtitle={t('home.testimonialsSubtitle')}
          />
          <Box position="relative" overflow="hidden">
            <AnimatePresence mode="wait">
              {testimonials.length > 0 && (
                <motion.div
                  key={testimonials[testimonialIndex]?.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                >
                  <Box
                    bg="surface.muted"
                    borderRadius="3xl"
                    border="1px solid"
                    borderColor="border.subtle"
                    boxShadow="lg"
                    position="relative"
                    overflow="hidden"
                    px={{ base: 6, md: 14 }}
                    py={{ base: 10, md: 14 }}
                    textAlign="center"
                  >
                    <Icon as={FaQuoteLeft} position="absolute" top={6} left={8} boxSize={14} color="accent.400" opacity={0.1} />
                    <Box
                      h="5px"
                      w="64px"
                      bgGradient="linear(to-r, brand.500, accent.400)"
                      borderRadius="full"
                      mx="auto"
                      mb={8}
                    />
                    <HStack justify="center" spacing={1} mb={6} aria-label={t('home.testimonialsTitle')}>
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Icon key={s} as={FaStar} color="accent.400" />
                      ))}
                    </HStack>
                    <Text
                      fontSize={{ base: 'lg', md: 'xl' }}
                      lineHeight="tall"
                      color="text.soft"
                      fontStyle="italic"
                      maxW="720px"
                      mx="auto"
                      mb={8}
                    >
                      "{testimonials[testimonialIndex]?.text}"
                    </Text>
                    <Flex align="center" justify="center" gridGap={4}>
                      <Flex
                        w="56px"
                        h="56px"
                        borderRadius="full"
                        bgGradient="linear(to-br, brand.500, brand.700)"
                        color="white"
                        fontWeight="700"
                        fontSize="lg"
                        align="center"
                        justify="center"
                        border="3px solid"
                        borderColor="accent.400"
                        boxShadow="sm"
                      >
                        {initials}
                      </Flex>
                      <Box textAlign="left">
                        <Text fontWeight="700" fontSize="lg">
                          {testimonials[testimonialIndex]?.name}
                        </Text>
                        <Text fontSize="sm" color="text.muted">
                          {testimonials[testimonialIndex]?.role}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
          <Flex justify="center" align="center" mt={6} gridGap={4}>
            <IconButton
              aria-label="Previous"
              icon={<ChevronLeftIcon />}
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              variant="outline"
              color="brand.500"
              borderColor="border.subtle"
              size="sm"
            />
            <HStack spacing={2}>
              {testimonials.length > 0 &&
                testimonials.map((_, index) => (
                  <Box
                    key={index}
                    as="button"
                    width={testimonialIndex === index ? '26px' : '10px'}
                    height="10px"
                    borderRadius="full"
                    bg={testimonialIndex === index ? 'brand.500' : 'gray.400'}
                    opacity={testimonialIndex === index ? 1 : 0.5}
                    transition="all 0.3s ease"
                    onClick={() => setTestimonialIndex(index)}
                  />
                ))}
            </HStack>
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon />}
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              variant="outline"
              color="brand.500"
              borderColor="border.subtle"
              size="sm"
            />
          </Flex>
        </Container>
      </Box>

      {/* ===================== FAQ ===================== */}
      <Box as="section" id="faq" py={{ base: 16, md: 24 }} bg="surface.muted">
        <Container maxW="5xl">
          <SectionHeading
            kicker={t('nav.faq')}
            title={t('home.faqTitle')}
            subtitle={t('home.faqSubtitle')}
          />
          <Box>
            <Accordion allowToggle>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <FAQItem key={n} n={n} />
              ))}
            </Accordion>
          </Box>

          <Flex
            mt={10}
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gridGap={6}
            bgGradient="linear(to-r, brand.800, brand.600)"
            borderRadius="2xl"
            p={{ base: 8, md: 10 }}
            color="white"
          >
            <Flex align="center" gridGap={5}>
              <Flex
                w="56px"
                h="56px"
                borderRadius="full"
                bg="accent.400"
                color="brand.900"
                align="center"
                justify="center"
                flexShrink={0}
                boxShadow="lg"
              >
                <Icon as={FaComments} boxSize={6} />
              </Flex>
              <Box>
                <Heading as="h3" size="md" mb={1}>
                  {t('faq.helpTitle')}
                </Heading>
                <Text color="whiteAlpha.800" fontSize="sm">
                  {t('faq.helpSubtitle')}
                </Text>
              </Box>
            </Flex>
            <Button
              as="a"
              href="mailto:info@microtous.com,support@microtous.com?subject=Question"
              size="lg"
              colorScheme="accent"
              color="brand.900"
              px={10}
              _hover={{ bg: 'accent.300' }}
            >
              {t('faq.helpCta')}
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* ===================== TEAM ===================== */}
      <Box as="section" id="team" py={{ base: 16, md: 24 }} bg="surface.base">
        <Container maxW="7xl">
          <SectionHeading
            kicker={t('nav.teams')}
            title={t('home.teamTitle')}
            subtitle={t('home.teamSubtitle')}
          />
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={8}>
            {featuredTeam.map((member) => (
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
          <Box textAlign="center" mt={12}>
            <Button
              size="lg"
              colorScheme="brand"
              px={12}
              onClick={() => navigate('/teams')}
              rightIcon={<ChevronRightIcon />}
            >
              {t('teams.seeAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ===================== CONTACT ===================== */}
      <Box as="section" id="contact" py={{ base: 16, md: 24 }} bg="brand.900">
        <Container maxW="7xl">
          <SectionHeading
            kicker={t('nav.contact')}
            title={t('home.contactTitle')}
            light
          />
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={{ base: 10, lg: 16 }} alignItems="start">
            <Box>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="lg"
                border="1px solid"
                borderColor="whiteAlpha.300"
                mb={8}
              >
                <iframe
                  src="https://maps.google.com/maps?q=1.5642063,30.2402869&z=16&output=embed"
                  title="COOPEC Microtous - Bunia, Ituri"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </Box>
              <Stack spacing={6} fontSize="sm" color="whiteAlpha.800">
                <Button
                  as="a"
                  href="https://maps.app.goo.gl/VNpA3uToRUJNxDeS8"
                  isExternal
                  size="sm"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  alignSelf="flex-start"
                  leftIcon={<FaMapMarkerAlt />}
                >
                  {t('contact.openMap')}
                </Button>
              </Stack>
            </Box>

            <Box bg="surface.base" borderRadius="2xl" p={{ base: 6, md: 10 }} boxShadow="xl">
              <form ref={contactForm} onSubmit={handleContactSubmit}>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5}>
                  <FormControl id="contact-name" isRequired>
                    <FormLabel fontWeight="600">{t('home.contactName')}</FormLabel>
                    <Input name="user_name" placeholder={t('home.contactNamePlaceholder')} />
                  </FormControl>
                  <FormControl id="contact-email" isRequired>
                    <FormLabel fontWeight="600">{t('home.contactEmail')}</FormLabel>
                    <Input name="user_email" type="email" placeholder={t('home.contactEmailPlaceholder')} />
                  </FormControl>
                </Grid>
                <FormControl id="contact-message" mt={5} isRequired>
                  <FormLabel fontWeight="600">{t('home.contactMessage')}</FormLabel>
                  <Textarea name="message" rows={5} placeholder={t('home.contactMessagePlaceholder')} />
                </FormControl>
                <Button type="submit" size="lg" mt={6} colorScheme="brand" isLoading={isSubmitting} loadingText={t('home.contactSend')}>
                  {t('home.contactSend')}
                </Button>
              </form>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;