import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Heading, Button, Stack, Input, Textarea, Flex, Grid, FormControl, FormLabel, Text } from '@chakra-ui/react';
import PageHero from '../Components/PageHero';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
   const { t } = useTranslation();
   const form = useRef();
   const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   const sendEmail = (e) => {
       e.preventDefault();
       setIsSubmitting(true);
       setErrorMessage(null);

       emailjs
           .sendForm('service_u249j16', 'template_sty9mnt', form.current, 'YnzlhG7bfYsDDM0vz')
           .then(
               () => {
                   setIsSubmitting(false);
                   setIsSubmitted(true);
                   setFormData({ user_name: '', user_email: '', message: '' });
                   e.target.reset();
                   setTimeout(() => setIsSubmitted(false), 5000);
               },
               (error) => {
                   console.log('ÉCHEC...', error.text);
                   setIsSubmitting(false);
                   setErrorMessage(t('contact.error'));
               }
           );
   };

   const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({ ...formData, [name]: value });
   };

   return (
       <Box pb={16}>
           <PageHero title={t('contact.heroTitle')} subtitle={t('contact.title')} />
           <Flex
               as="section"
               py={{ base: 14, md: 20 }}
               bg="surface.muted"
               justifyContent="center"
               alignItems="flex-start"
               flexDirection={{ base: 'column', md: 'row' }}
               gap={{ base: 10, md: 12 }}
               px={{ base: 4, md: 10 }}
               maxW="1200px"
               mx="auto"
           >
               <Box
                   bg="surface.base"
                   borderRadius="2xl"
                   boxShadow="sm"
                   border="1px solid"
                   borderColor="border.subtle"
                   p={{ base: 6, md: 10 }}
                   width={{ base: '100%', md: '55%' }}
               >
                   <Heading as="h2" size="xl" mb={8}>
                       {t('contact.title')}
                   </Heading>
                   <form ref={form} onSubmit={sendEmail}>
                       <Stack spacing={5}>
                           <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5}>
                               <FormControl id="name" isRequired>
                                   <FormLabel fontWeight="600">{t('contact.name')}</FormLabel>
                                   <Input
                                       name="user_name"
                                       placeholder={t('contact.namePlaceholder')}
                                       value={formData.user_name}
                                       onChange={handleChange}
                                   />
                               </FormControl>
                               <FormControl id="email" isRequired>
                                   <FormLabel fontWeight="600">{t('contact.email')}</FormLabel>
                                   <Input
                                       type="email"
                                       name="user_email"
                                       placeholder={t('contact.emailPlaceholder')}
                                       value={formData.user_email}
                                       onChange={handleChange}
                                   />
                               </FormControl>
                           </Grid>
                           <FormControl id="message" isRequired>
                               <FormLabel fontWeight="600">{t('contact.message')}</FormLabel>
                               <Textarea
                                   name="message"
                                   rows={5}
                                   placeholder={t('contact.messagePlaceholder')}
                                   value={formData.message}
                                   onChange={handleChange}
                               />
                           </FormControl>
                           {errorMessage && (
                               <Text color="red.500">{errorMessage}</Text>
                           )}
                           {isSubmitted && !errorMessage && (
                               <Text color="green.500">{t('contact.success')}</Text>
                           )}
                           <Button
                               type="submit"
                               size="lg"
                               colorScheme="brand"
                               isLoading={isSubmitting}
                               loadingText={t('contact.send')}
                           >
                               {t('contact.send')}
                           </Button>
                       </Stack>
                   </form>
               </Box>

               <Box width={{ base: '100%', md: '45%' }}>
                   <Box borderRadius="2xl" overflow="hidden" boxShadow="lg" border="1px solid" borderColor="border.subtle">
                       <iframe
                           src="https://maps.google.com/maps?q=1.5642063,30.2402869&z=16&output=embed"
                           title="COOPEC Microtous - Bunia, Ituri"
                           width="100%"
                           height="420"
                           style={{ border: 0 }}
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                           allowFullScreen
                       />
                   </Box>
                   <Button
                       as="a"
                       href="https://maps.app.goo.gl/VNpA3uToRUJNxDeS8"
                       isExternal
                       size="md"
                       colorScheme="brand"
                       mt={4}
                       w="100%"
                   >
                       {t('contact.openMap')}
                   </Button>
               </Box>
           </Flex>
       </Box>
   );
};

export default ContactSection;