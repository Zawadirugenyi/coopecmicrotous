import React from "react";
import { Box, Container, Flex, Heading, Text, Link, Image, Icon, Divider, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFilePdf } from "react-icons/fa";
import logo from "../Components/Assetes/photo_5992532938148922968_x__1_-removebg-preview.png";

const Footer = () => {
  const { t } = useTranslation();

  const categories = [
    { label: t("footer1.savings"), to: "/epargne" },
    { label: t("footer1.credit"), to: "/credit" },
    { label: t("footer1.services"), to: "/services" },
    { label: t("footer1.promotions"), to: "/promotions" },
  ];

  const companyLinks = [
    { label: t("footer1.home"), to: "/home" },
    { label: t("footer1.about"), to: "/about_us" },
    { label: t("nav.jobs"), to: "/jobs" },
    { label: t("nav.faq"), to: "/faq" },
    { label: t("footer1.contact"), to: "/contact_us" },
  ];

  const socials = [
    { icon: FaFacebook, href: "https://www.facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  ];

  return (
    <Box as="footer" bg="brand.900" color="white">
      <Box h="5px" bgGradient="linear(to-r, brand.500, accent.400)" />

      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        <Flex flexWrap="wrap" justifyContent="space-between" align="flex-start" gridGap={{ base: 10, lg: 20 }}>
          {/* Brand */}
          <Box minW={{ base: "100%", lg: "300px" }} maxW="320px">
            <Flex align="center" mb={4}>
              <Image
                src={logo}
                alt={t("footer1.logoAlt")}
                boxSize="60px"
                mr={3}
                objectFit="contain"
              />
              <Heading fontSize={{ base: "xl", md: "2xl" }} color="white">
                COOPEC
                <Box as="span" color="accent.400">
                  MICROTOUS
                </Box>
              </Heading>
            </Flex>
            <Text fontSize="sm" lineHeight="1.8" color="whiteAlpha.700">
              {t("footer1.tagline")}
            </Text>
            <Stack direction="row" spacing={3} mt={6}>
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                  bg="whiteAlpha.100"
                  borderRadius="full"
                  p={2.5}
                  color="white"
                  transition="all 0.2s ease"
                  _hover={{ bg: "accent.400", color: "brand.900" }}
                >
                  <Icon as={social.icon} boxSize={4} />
                </Link>
              ))}
            </Stack>
            <Link
              href={`${process.env.PUBLIC_URL}/microtous-depliant.pdf`}
              download
              mt={6}
              display="inline-flex"
              alignItems="center"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="accent.400"
              borderRadius="full"
              px={5}
              py={2.5}
              color="white"
              fontSize="sm"
              fontWeight="600"
              _hover={{ bg: "accent.400", color: "brand.900" }}
            >
              <Icon as={FaFilePdf} mr={2} boxSize={4} color="accent.400" />
              {t("footer1.downloadBrochure")}
            </Link>
          </Box>

          <Flex flexWrap="wrap" justifyContent="space-between" gridGap={{ base: 10, lg: 8 }}>
          {/* Categories */}
          <Box minW={0}>
            <Heading
              fontSize="sm"
              color="white"
              textTransform="uppercase"
              letterSpacing="0.14em"
              mb={5}
            >
              {t("footer1.products")}
            </Heading>
            <Stack spacing={3} align="flex-start">
              {categories.map((link) => (
                <RouterLink key={link.to} to={link.to}>
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.700"
                    _hover={{ color: "accent.400" }}
                  >
                    {link.label}
                  </Text>
                </RouterLink>
              ))}
            </Stack>
          </Box>

          {/* Company */}
          <Box minW={0}>
            <Heading
              fontSize="sm"
              color="white"
              textTransform="uppercase"
              letterSpacing="0.14em"
              mb={5}
            >
              {t("footer1.links")}
            </Heading>
            <Stack spacing={3} align="flex-start">
              {companyLinks.map((link) => (
                <RouterLink key={link.to} to={link.to}>
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.700"
                    _hover={{ color: "accent.400" }}
                  >
                    {link.label}
                  </Text>
                </RouterLink>
              ))}
            </Stack>
          </Box>

          {/* Contact */}
          <Box minW={0}>
            <Heading
              fontSize="sm"
              color="white"
              textTransform="uppercase"
              letterSpacing="0.14em"
              mb={5}
            >
              {t("footer1.contactTitle")}
            </Heading>
            <Stack spacing={3.5} align="flex-start" fontSize="sm" color="whiteAlpha.800">
              <Link href={`tel:${t("footer1.phoneNumber").replace(/[^+\d]/g, "")}`} _hover={{ color: "accent.400" }}>
                <Flex align="center">
                  <Icon as={FaPhoneAlt} mr={3} color="accent.400" boxSize={4} />
                  <Text>{t("footer1.phoneNumber")}</Text>
                </Flex>
              </Link>
              <Link href="mailto:info@microtous.com,support@microtous.com" _hover={{ color: "accent.400" }}>
                <Flex align="center">
                  <Icon as={FaEnvelope} mr={3} color="accent.400" boxSize={4} />
                  <Text>{t("footer1.emailAddress")}</Text>
                </Flex>
              </Link>
              <Flex align="flex-start">
                <Icon as={FaMapMarkerAlt} mt={1} mr={3} color="accent.400" boxSize={4} />
                <Text>{t("footer1.address")}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaClock} mr={3} color="accent.400" boxSize={4} />
                <Text>
                  {t("footer1.monFri")} · {t("footer1.sat")}
                </Text>
              </Flex>
            </Stack>
          </Box>
          </Flex>
        </Flex>
      </Container>

      <Divider borderColor="whiteAlpha.200" />
      <Box py={5}>
        <Container maxW="7xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gridGap={3}
          >
            <Text fontSize="sm" color="whiteAlpha.700">
              © {new Date().getFullYear()} COOPEC MICROTOUS. {t("footer1.rights")}
            </Text>
            <Text fontSize="sm" color="whiteAlpha.600">
              {t("footer1.city")}
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;