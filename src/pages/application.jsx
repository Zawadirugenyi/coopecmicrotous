import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Box, 
  Container,
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  Select, 
  useToast, 
  Grid, 
  Text, 
  Stack,
  Divider,
} from '@chakra-ui/react';
import PageHero from '../Components/PageHero';

const ApplicationForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    place: '',
    nationality: '',
    sex: '',
    cv: null,
    cover_letter: null,
    other_documents: null,
    years_of_experience: '',
    starting_date: '',
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormData({
      full_name: '',
      email: '',
      place: '',
      nationality: '',
      sex: '',
      cv: null,
      cover_letter: null,
      other_documents: null,
      years_of_experience: '',
      starting_date: '',
    });
    e.target.reset();

    toast({
      title: t('application.toastSuccessTitle'),
      description: t('application.toastSuccessDesc'),
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });

    setLoading(false);
  };

  return (
    <Box pb={16}>
      <PageHero title={t('application.title')} />
      <Box as="section" py={{ base: 14, md: 20 }} bg="surface.muted">
        <Container maxW="5xl">
          <Box
            bg="surface.base"
            borderRadius="2xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="border.subtle"
            p={{ base: 6, md: 12 }}
          >
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" mb={2} textAlign="center">
              {t('application.title')}
            </Text>
            <Divider mb={8} />
            <form onSubmit={handleSubmit}>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="full_name" fontWeight="600">{t('application.fullName')}</FormLabel>
                  <Input
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder={t('application.fullName')}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email" fontWeight="600">{t('application.email')}</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('application.email')}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="place" fontWeight="600">{t('application.place')}</FormLabel>
                  <Input
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder={t('application.placePlaceholder')}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="nationality" fontWeight="600">{t('application.nationality')}</FormLabel>
                  <Select
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder={t('application.nationalityPlaceholder')}
                  >
                    <option value="congolese">{t('application.nationalityCongolese')}</option>
                    <option value="kenyan">{t('application.nationalityKenyan')}</option>
                    <option value="rwandan">{t('application.nationalityRwandan')}</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="sex" fontWeight="600">{t('application.sex')}</FormLabel>
                  <Select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    placeholder={t('application.sexPlaceholder')}
                  >
                    <option value="male">{t('application.sexMale')}</option>
                    <option value="female">{t('application.sexFemale')}</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="cv" fontWeight="600">{t('application.cv')}</FormLabel>
                  <Input
                    id="cv"
                    name="cv"
                    type="file"
                    onChange={handleFileChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="cover_letter" fontWeight="600">{t('application.coverLetter')}</FormLabel>
                  <Input
                    id="cover_letter"
                    name="cover_letter"
                    type="file"
                    onChange={handleFileChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="other_documents" fontWeight="600">{t('application.otherDocuments')}</FormLabel>
                  <Input
                    id="other_documents"
                    name="other_documents"
                    type="file"
                    onChange={handleFileChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="years_of_experience" fontWeight="600">{t('application.experience')}</FormLabel>
                  <Select
                    id="years_of_experience"
                    name="years_of_experience"
                    value={formData.years_of_experience}
                    onChange={handleChange}
                    placeholder={t('application.experiencePlaceholder')}
                  >
                    <option value="beginner">{t('application.experienceBeginner')}</option>
                    <option value="intermediate">{t('application.experienceIntermediate')}</option>
                    <option value="advanced">{t('application.experienceAdvanced')}</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="starting_date" fontWeight="600">{t('application.startDate')}</FormLabel>
                  <Input
                    id="starting_date"
                    name="starting_date"
                    type="date"
                    value={formData.starting_date}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center" mt={8} spacing={4}>
                <Button size="lg" colorScheme="brand" isLoading={loading} type="submit" loadingText={t('application.submit')}>
                  {t('application.submit')}
                </Button>
              </Stack>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ApplicationForm;