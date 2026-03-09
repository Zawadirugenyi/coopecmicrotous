import React from "react";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box position="fixed" bottom="150px" right="20px" zIndex="999">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaGlobe />}
          aria-label="Language"
          size="lg"
          bg="#2a8fc1"
          color="white"
          borderRadius="full"
          boxShadow="lg"
          _hover={{ bg: "#1f6f9a" }}
        />

        <MenuList>
          <MenuItem onClick={() => changeLanguage("en")}>
            🇬🇧 English
          </MenuItem>

          <MenuItem onClick={() => changeLanguage("fr")}>
            🇫🇷 Français
          </MenuItem>

          <MenuItem onClick={() => changeLanguage("sw")}>
            🇹🇿 Kiswahili
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;