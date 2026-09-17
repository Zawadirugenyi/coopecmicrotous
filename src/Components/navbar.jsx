import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Text,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HamburgerIcon, ChevronDownIcon, MoonIcon, SunIcon, DownloadIcon } from '@chakra-ui/icons';
import logo from '../Components/Assetes/photo_5992532938148922968_x__1_-removebg-preview.png';

function Navbar() {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverBg = useColorModeValue('brand.50', 'whiteAlpha.100');
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/');

  const primary = [
    { label: t('nav.home'), to: '/home' },
    { label: t('nav.about'), to: '/about_us' },
    { label: t('nav.contact'), to: '/contact_us' },
  ];

  const services = [
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.savings'), to: '/epargne' },
    { label: t('nav.credit'), to: '/credit' },
  ];

  const secondary = [
    { label: t('nav.jobs'), to: '/jobs' },
    { label: t('nav.promotions'), to: '/promotions' },
    { label: t('nav.testimonials'), to: '/testimonials' },
    { label: t('nav.faq'), to: '/faq' },
    { label: t('nav.teams'), to: '/teams' },
  ];

  const allItems = [...primary, ...services, ...secondary];

  return (
    <Flex
      as="header"
      w="100%"
      px={{ base: 4, md: 8 }}
      py={3}
      bg="surface.base"
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      zIndex="20"
      borderBottom="1px solid"
      borderColor="border.subtle"
      boxShadow={scrolled ? 'md' : 'none'}
      transition="box-shadow 0.2s ease"
    >
      <Flex align="center">
        <Image
          src={logo}
          alt="COOPEC Microtous"
          boxSize={{ base: '52px', md: '60px' }}
          objectFit="contain"
          borderRadius="md"
          bg="white"
          p={1}
        />
        <Box ml={3}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" lineHeight="tight">
            COOPEC
            <Box as="span" color="accent.400">
              MICROTOUS
            </Box>
          </Text>
          <Text fontSize="xs" color="text.muted" display={{ base: 'none', sm: 'block' }}>
            {t('hero.message')}
          </Text>
        </Box>
      </Flex>

      {/* Desktop navigation */}
      <Flex align="center" display={{ base: 'none', md: 'flex' }} gridGap={1}>
        {primary.map((item) => (
          <Button
            key={item.to}
            as={Link}
            to={item.to}
            variant="ghost"
            size="sm"
            color={isActive(item.to) ? 'brand.500' : 'text.soft'}
            fontWeight={isActive(item.to) ? 700 : 500}
            bg={isActive(item.to) ? hoverBg : 'transparent'}
            _hover={{ bg: hoverBg, color: 'brand.500' }}
            px={4}
          >
            {item.label}
          </Button>
        ))}

        {/* Services dropdown */}
        <Menu placement="bottom-start">
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="ghost"
            size="sm"
            color={isActive('/services') || isActive('/epargne') || isActive('/credit') ? 'brand.500' : 'text.soft'}
            fontWeight={isActive('/services') || isActive('/epargne') || isActive('/credit') ? 700 : 500}
            bg={(isActive('/services') || isActive('/epargne') || isActive('/credit')) ? hoverBg : 'transparent'}
            _hover={{ bg: hoverBg, color: 'brand.500' }}
            px={4}
          >
            {t('nav.services')}
          </MenuButton>
          <MenuList>
            {services.map((item) => (
              <MenuItem key={item.to} as={Link} to={item.to} fontWeight={600}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Divider orientation="vertical" h="24px" mx={2} />

        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
          color="text.soft"
          _hover={{ bg: hoverBg, color: 'brand.500' }}
        />

        <IconButton
          aria-label={t('footer1.downloadBrochure')}
          as="a"
          href={`${process.env.PUBLIC_URL}/microtous-depliant.pdf`}
          download
          ml={1}
          icon={<DownloadIcon />}
          variant="solid"
          colorScheme="accent"
          color="brand.900"
          size="sm"
          _hover={{ bg: 'accent.300' }}
        />

        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label="Menu"
            variant="ghost"
            color="text.soft"
            _hover={{ bg: hoverBg, color: 'brand.500' }}
          />
          <MenuList>
            {secondary.map((item) => (
              <MenuItem key={item.to} as={Link} to={item.to} fontWeight={600}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      {/* Mobile navigation */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Flex align="center" gridGap={2}>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
            color="text.soft"
            _hover={{ bg: hoverBg, color: 'brand.500' }}
          />
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              aria-label="Menu"
              variant="outline"
              color="brand.500"
              borderColor="border.subtle"
              _hover={{ bg: hoverBg }}
            />
            <MenuList maxH="60vh" overflowY="auto">
              <MenuItem
                as="a"
                href={`${process.env.PUBLIC_URL}/microtous-depliant.pdf`}
                download
                icon={<DownloadIcon />}
                fontWeight={600}
              >
                {t('footer1.downloadBrochure')}
              </MenuItem>
              {allItems.map((item) => (
                <MenuItem
                  key={item.to}
                  as={Link}
                  to={item.to}
                  fontWeight={600}
                  bg={isActive(item.to) ? hoverBg : 'transparent'}
                  color={isActive(item.to) ? 'brand.500' : 'inherit'}
                >
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;