// src/components/Chatbot.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const Chatbot = () => {
  const { t } = useTranslation();
  const phoneNumber = '+243820937002'; // Replace this with your actual phone number

  return (
    <div>
      {/* Your chatbot content goes here */}

      {/* WhatsApp Chat Button */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <IconButton
          as="a"
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          aria-label={t('chatbot.ariaLabel')}
          icon={<FaWhatsapp />}
          size="lg"
          bg="#2a8fc1" // Optional, for styling the button
          borderRadius="full" // Optional, to make it circular
          boxShadow="lg"
          marginTop="-120px"
          _hover={{ color: '#f7e135' }}
        />
      </div>
    </div>
  );
};

export default Chatbot;
