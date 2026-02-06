
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
//import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Box, Button, Heading, Grid,Text,Card, CardBody ,Image,
         Accordion, SimpleGrid, AccordionItem, AccordionButton, 
         AccordionPanel, AccordionIcon,  Flex,IconButton , Stack} from '@chakra-ui/react';
import backgroundImage1 from '../Components/Assetes/home1.webp';
import backgroundImage2 from '../Components/Assetes/111.webp';
import backgroundImage3 from '../Components/Assetes/home3.jpg';
import aboutImage from '../Components/Assetes/Gerante1.jpeg'
import backgroundImage4 from '../Components/Assetes/1113.jpeg';
import backgroundImage from '../Components/Assetes/home3.jpg'; 
import home3 from '../Components/Assetes/home2.jpg'; 
import { Input, Textarea,  FormControl, FormLabel } from '@chakra-ui/react';
//import contactImage from '../Components/Assetes/Equipe.jpeg'; 


//const phoneNumber = '243820937002'; 

const HomePage = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');
   // const { } = useTranslation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://microtousadmin.onrender.com/api/services/');
        setServices(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to fetch services. Please try again.');
      }
    };

    fetchServices();
  }, []);
  

   const [promotions, setPromotions] = useState([]);
 

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await axios.get('https://microtousadmin.onrender.com/api/promotions/'); // Adjust endpoint as needed
        setPromotions(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching promotions:', err);
        setError('Failed to fetch promotions. Please try again.');
      }
    };

    fetchPromotions();
  }, []);

  const [activities, setActivities] = useState([]);


  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('https://microtousadmin.onrender.com/api/activities/'); // Adjust endpoint as needed
        setActivities(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching activities:', err);
        setError('Failed to fetch activities. Please try again.');
      }
    };

    fetchActivities();
  }, []);


 const [jobs, setJobs] = useState([]);
 
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://microtousadmin.onrender.com/api/jobinternships/'); // Adjust the endpoint if needed
        setJobs(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to fetch jobs. Please try again.');
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (jobId) => {
    console.log(`Applying for job with ID: ${jobId}`);
    // You can add logic here to navigate to an application form or submit a request.
  };




    const [testimonials, setTestimonials] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials data
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://microtousadmin.onrender.com/api/testimonials/');
        setTestimonials(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to fetch testimonials. Please try again.');
      }
    };

    fetchTestimonials();
  }, []);

  // Automatic slideshow every 5 seconds with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [testimonials.length]);

  const getNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getPreviousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


   const [teamMembers, setTeamMembers] = useState([]); // State to hold fetched data

  useEffect(() => {
    // Fetch team members data
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://microtousadmin.onrender.com/api/team_members/');
        const data = await response.json();
        setTeamMembers(data); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers(); // Fetch data when the component mounts
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        w="100vw"
        h="50vh" // Reduced height for a smaller Hero section
        overflow="hidden"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          width="300%"
          position="absolute"
          top="0"
          left="0"
          transform="translateX(0)"
          transition="transform 1s ease-in-out"
        >
          <Box
            width="100vw"
            height="60vh" // Reduced height
            backgroundImage={`url(${backgroundImage1})`}
            backgroundSize="cover"
            backgroundPosition="center"
            flex="none"
          />
          <Box
            width="100vw"
            height="60vh" // Reduced height
            backgroundImage={`url(${backgroundImage2})`}
            backgroundSize="cover"
            backgroundPosition="center"
            flex="none"
          />
          <Box
            width="100vw"
            height="60vh" // Reduced height
            backgroundImage={`url(${backgroundImage3})`}
            backgroundSize="cover"
            backgroundPosition="center"
            flex="none"
          />
        </Box>

        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
        />
        <Box zIndex="2" textAlign="center" px={4} py={{ base: 8, md: 16 }}>
          <Heading
            color="white"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            mb={4}
            mt="-10px"
           
          >
            Bienvenu chez nous
          </Heading>
         
         
        </Box>
      </Box>

      {/* About Us Section */}
   
    <Box id="about-us" p={8} bg="gray.100">
      <Grid
        templateColumns={{
          base: '1fr', // Single column on smaller screens
          md: '1fr 1fr', // Two columns on medium and larger screens
        }}
        gap={8}
        alignItems="center"
      >
        {/* Image Card */}
        <Box>
          <img
            src={aboutImage}
            alt="About Us"
          
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="md"
          />
        </Box>

        {/* Content Card */}
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          bg="white"
          p={8}
          height="auto" // Allow content to adjust based on text height
        >
        <Heading as="h2" size="xl" mb={4}>
          À propos de nous
        </Heading>
        <Text mb={4} fontSize="lg">
         À la COOPEC Microtous, nous sommes une coopérative d’épargne et de crédit engagée à améliorer la vie financière de nos membres. Notre équipe de professionnels dévoués œuvre chaque jour pour offrir des services fiables, accessibles et adaptés aux besoins de chacun. Forts de notre expérience et de notre expertise, nous proposons des solutions innovantes qui permettent à nos membres de sécuriser leurs finances, de réaliser leurs projets et de planifier un avenir stable.
         </Text>
        <Text mb={4} fontSize="lg">
         Notre équipe diversifiée réunit des experts en finance, gestion et développement communautaire, garantissant des conseils et des solutions de qualité. Nous comprenons les défis auxquels nos membres sont confrontés et nous travaillons sans relâche pour leur fournir un soutien financier sûr et durable. Que vous souhaitiez épargner, investir ou accéder à un crédit, la COOPEC Microtous est votre partenaire de confiance pour bâtir un avenir prospère.
         </Text>


          {/* Learn More Button */}
      <Button  
                color="#2a8fc1"
              size="lg"
              _hover={{ bg: 'yellow.200' }}
              px={8}
              as="a"
              href="home"
              mt="10px"
              marginTop="30px">
                
          En savoir plus
        </Button>

        </Box>
      </Grid>
    </Box>
      {/* Services Section */}
      <Box
      id="services"
      p={8}
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPos="center"
      color="white"
     
    >
 
     <Heading as="h2" size="xl" mb={6} textAlign="center">
      Nos Services
    </Heading>
      {error && <Text color="red.500" mb={4}>{error}</Text>}
      <Box
        p={6}
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="lg"
        boxShadow="lg"
        maxW="1300px"
        mx="auto"
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={6}>
          {services.map((service, index) => (
            <Card key={index} bg="white" color="black" boxShadow="md" borderRadius="md">
              <CardBody>
                <Heading as="h3" size="md" mb={4}>
                  {service.name}
                </Heading>
                <Text mb={4}>{service.description}</Text>
          
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>

      {/* Promotions Section */}
      <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh" // Adjust height to fit content
     
      bgSize="cover" // Ensure the image covers the section
      bgPosition="center" // Center the image
      p={4}
      backgroundBlendMode="overlay" // Overlay effect to darken the image
      backgroundColor="rgba(0, 0, 0, 0.5)" // Darken the background for better text contrast
    >
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        p={8}
        width={{ base: '100%', md: '95%', lg: '100%' }} // Adjust width based on screen size
        textAlign="center" // Center text horizontally
      >
     <Heading as="h2" size="xl" mb={4}>
      Promotions
    </Heading>
    <Text mb={4}>
      Découvrez nos dernières promotions et offres spéciales.
    </Text>


        {/* Render the promotions */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={8} mt={8}>
          {promotions.map((promotion) => {
            const imageUrl = promotion.image && promotion.image.startsWith('/media/')
              ? `http://127.0.0.1:8000${promotion.image}`
              : promotion.image;

            return (
              <Box
                key={promotion.id}
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="lg"
                textAlign="center"
              >
                {/* Conditionally render the image if URL is provided */}
                {promotion.image && (
                  <Image
                    src={imageUrl}
                    alt={promotion.title}
                    borderRadius="md"
                    mb={4}
                    objectFit="cover"
                    width="100%"
                    height={{ base: '200px', md: '250px' }} // Adjust height for responsive design
                    fallbackSrc="https://via.placeholder.com/150" // Use a fallback image in case of broken URL or loading failure
                  />
                )}

                {/* Title */}
                <Heading as="h3" size="md" mb={2}>
                  {promotion.title}
                </Heading>

                {/* Description */}
                <Text fontSize="sm" color="gray.600" mb={4}>
                  {promotion.description}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>

        {/* Read More Button */}
        <Button  
                color="#2a8fc1"
              size="lg"
              _hover={{ bg: 'yellow.200' }}
              px={8}
              as="a"
              href="home"
              mt="10px"
              marginTop="30px">
                
          En savoir plus
        </Button>
      </Box>
    </Flex>


      {/* Activities Section */}

         <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh" // Adjust height to fit content
    
      bgSize="cover" // Ensure the image covers the section
      bgPosition="center" // Center the image
      p={4}

    >
      <Box
          bg="white"
        borderRadius="md"
       
        p={8}
        width={{ base: '100%', md: '95%', lg: '100%' }} // Adjust width based on screen size
        textAlign="center" 
      >
    <Heading as="h2" size="xl" mb={4}>
      Activités
    </Heading>
    <Text mb={4}>
      Découvrez les différentes activités que nous organisons pour engager nos clients et la communauté.
    </Text>


        {/* Render the activities */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={8} mt={8}>
          {activities.map((activity) => {
            const imageUrl = activity.image && activity.image.startsWith('/media/')
              ? `http://127.0.0.1:8000${activity.image}`
              : activity.image;

            return (
              <Box
                key={activity.id}
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="lg"
                textAlign="center"
              >
                {/* Conditionally render the image if URL is provided */}
                {activity.image && (
                  <Image
                    src={imageUrl}
                    alt={activity.name}
                    borderRadius="md"
                    mb={4}
                    objectFit="cover"
                    width="100%"
                    height={{ base: '200px', md: '250px' }} // Adjust height for responsive design
                    fallbackSrc="https://via.placeholder.com/150" // Use a fallback image in case of broken URL or loading failure
                  />
                )}

                {/* Title */}
                <Heading as="h3" size="md" mb={2}>
                  {activity.name}
                </Heading>

                {/* Description */}
                <Text fontSize="sm" color="gray.600" mb={4}>
                  {activity.description}
                </Text>

                {/* Activity Date, Time, and Venue */}
                <Text fontSize="sm" color="gray.600" mb={4}>
                 Date: {activity.date} | Heure: {activity.start_hour} - {activity.end_hour} | Lieu: {activity.venue}
                </Text>

                {/* Button to redirect */}
              
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>


      {/* Jobs & Internships Section */}
     <Box id="jobs" p={8} bg="gray.100">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Emplois & Stages
      </Heading>
      <Text mb={4} textAlign="center">
        Rejoignez notre équipe ! Nous sommes toujours à la recherche de personnes talentueuses pour nous aider à grandir.
      </Text>

      {error && <Text color="red.500" mb={4}>{error}</Text>}

      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={6}>
        {jobs.map((job, index) => (
          <Card key={index} bg="white" boxShadow="md" borderRadius="md">
            <CardBody>
              <Stack spacing={4}>
                <Heading as="h3" size="md">
                  {job.title}
                </Heading>
                <Text>{job.description}</Text>
                <Button         
                color="#2a8fc1"
              size="lg"
              _hover={{ bg: 'yellow.200' }}
              px={8}
              as="a"
              href="application"
              mt="10px"
                onClick={() => handleApply(job.id)}>
                 Postulez maintenant
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>

      {/* Testimonials Section */}
 <Box
      id="testimonials"
      p={8}
      bgImage={`url(${backgroundImage4})`} // Background image
      bgSize="cover"
      bgPosition="center"
      position="relative"
      minHeight="60vh"
    >
      <Box bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="md" boxShadow="lg" maxW="800px" mx="auto">
    <Heading as="h2" size="xl" mb={4} textAlign="center" color="white">
      Témoignages
    </Heading>
    <Text mb={4} textAlign="center" color="white">
      Découvrez ce que nos clients pensent de nos services.
    </Text>
        <Box overflow="hidden" position="relative">
          <AnimatePresence>
            {testimonials.length > 0 && (
              <motion.div
                key={testimonials[currentIndex]?.id}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  duration: 0.6,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                {/* Use requested image structure */}
                {testimonials[currentIndex]?.image && (
                  <Image
                    src={
                      testimonials[currentIndex].image.startsWith('/media/')
                        ? `http://127.0.0.1:8000${testimonials[currentIndex].image}`
                        : testimonials[currentIndex].image
                    }
                    borderRadius="full"
                    boxSize="120px"
                    objectFit="cover"
                    alt={`${testimonials[currentIndex]?.name}'s profile`}
                    mb={4}
                  />
                )}
                <Heading as="h3" size="md" fontWeight="bold" mb={2} color="gray.800">
                  {testimonials[currentIndex]?.name}
                </Heading>
                <Text maxW="400px" fontSize="sm" color="gray.600">
                  "{testimonials[currentIndex]?.text}"
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        <Flex justify="center" mt={4}>
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={getPreviousTestimonial}
            color="#2a8fc1"
            size="lg"
            mr={4}
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={getNextTestimonial}
            color="#2a8fc1"
            size="lg"
          />
        </Flex>

        <Flex justify="center" mt={4}>
          {testimonials.length > 0 &&
            testimonials.map((_, index) => (
              <Box
                key={index}
                as="span"
                width="10px"
                height="10px"
                borderRadius="50%"
                bg={currentIndex === index ? '#2a8fc1' : 'gray.300'}
                mx={2}
                cursor="pointer"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
        </Flex>
      </Box>
    </Box>

      {/* FAQs Section */}
  <Flex
  direction="column"
  alignItems="center"
  justifyContent="center"
  minHeight="80vh"
  bg="gray.100"
  p={4}
>
  <Box
    bg="white"
    borderRadius="md"
    boxShadow="lg"
    p={8}
    width="80%"
    maxWidth="800px"
    textAlign="left"
  >
    <Heading as="h2" size="xl" mb={4}>
      Questions fréquemment posées (FAQ)
    </Heading>
    <Text mb={4}>
      Trouvez des réponses aux questions les plus courantes concernant nos services , comptes, Crédits, et plus encore.
    </Text>

    {/* Accordion pour les FAQ bancaires */}
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Comment ouvrir un compte Epargne ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Vous pouvez ouvrir un compte bancaire en ligne via notre site Web ou en visitant l'une de nos agences. Vous aurez besoin d'une pièce d'identité valide, d'une preuve de domicile et d'un dépôt initial.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Quels types de comptes Epargnes proposez-vous ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Nous proposons différents types de comptes Epargnes, y compris les comptes Courant, les comptes Maisha et les dépôts à terme. Chaque type de compte a ses propres avantages, et vous pouvez choisir celui qui correspond à vos besoins financiers.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Comment puis-je demander un prêt ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Vous pouvez demander un prêt en visitant notre agence ou en remplissant un formulaire de demande en ligne. Selon le type de prêt, nous pourrions demander une preuve de revenu et un historique de crédit.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Comment réinitialiser mon mot de passe pour la banque en ligne ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Pour réinitialiser votre mot de passe de la banque en ligne, cliquez sur le lien "Mot de passe oublié" sur la page de connexion. Vous recevrez un e-mail avec des instructions pour réinitialiser votre mot de passe.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Quel est le taux d'intérêt des comptes d'épargne ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Nos comptes d'épargne offrent des taux d'intérêt compétitifs qui varient en fonction du type de compte et du solde. Veuillez consulter notre page des taux d'intérêt pour obtenir les informations les plus récentes.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Puis-je accéder à mon compte depuis n'importe où dans le monde ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Oui, vous pouvez accéder à votre compte depuis n'importe où dans le monde en utilisant notre plateforme de banque en ligne. Connectez-vous simplement avec vos identifiants et vous pourrez gérer votre compte depuis n'importe quel appareil avec une connexion Internet.
        </AccordionPanel>
      </AccordionItem>

      {/* Ajouter plus de AccordionItems si nécessaire */}
    </Accordion>

    {/* Bouton Lire plus */}
  </Box>
</Flex>

    
      {/* Team Section */}
      
 <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh" // Adjust height to fit content
        bgImage={`url(${home3})`} // Background image
        bgSize="cover" // Ensure the image covers the section
        bgPosition="center" // Center the image
        p={4}
        backgroundBlendMode="overlay" // Overlay effect to darken the image
        backgroundColor="rgba(0, 0, 0, 0.5)" // Darken the background for better text contrast
      >
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          p={8}
          width={{ base: '100%', md: '95%', lg: '100%' }} // Adjust width based on screen size
          textAlign="center" // Center text horizontally
        >
        <Heading as="h2" size="xl" mb={4}>
          Notre équipe
        </Heading>
        <Text mb={4}>
          Rencontrez les esprits brillants derrière notre succès. Notre équipe est l'épine dorsale de notre entreprise.
        </Text>


          {/* Render the team members */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={8} mt={8}>
            {teamMembers.map((member) => (
              <Box
                key={member.id}
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="lg"
                textAlign="center"
              >
                {/* Display team member's photo */}
                <Image
                  src={member.image} // Team member photo
                  borderRadius="full"
                  boxSize={{ base: '100px', md: '120px' }} // Make image size responsive
                  objectFit="cover"
                  mb={4}
                  mx="auto" // Center the image horizontally
                />
                <Heading as="h3" size="md" mb={2}>
                  {member.name}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {member.role}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Contact Section */}
      
<Box id="about-us"   
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        p={8}
        width={{ base: '100%', md: '95%', lg: '100%' }} // Adjust width based on screen size
        textAlign="center" >

      <Flex 
        id="contact" 
        p={8} 
        bg="gray.10" 
        justifyContent="center" 
        alignItems="center" 
        flexDirection={{ base: 'column', md: 'row' }} // Stack vertically on small screens and horizontally on larger screens
        minHeight="80vh"
      >
        {/* Contact Form Card */}
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          p={8}
          width={{ base: '100%', md: '100%' }}
          mr={{ base: 0, md: 8 }}
          mb={{ base: 8, md: 0 }}
        >
      <Heading as="h2" size="xl" mb={4}>
  Contactez-nous
</Heading>
<form>
  <FormControl id="full-name" mb={4} isRequired>
    <FormLabel>Nom complet</FormLabel>
    <Input type="text" placeholder="Entrez votre nom complet" />
  </FormControl>

  <FormControl id="email" mb={4} isRequired>
    <FormLabel>Email</FormLabel>
    <Input type="email" placeholder="Entrez votre email" />
  </FormControl>

  <FormControl id="message" mb={4} isRequired>
    <FormLabel>Message</FormLabel>
    <Textarea placeholder="Écrivez votre message ici" />
  </FormControl>

  <Button
    color="#2a8fc1"
    size="lg"
    _hover={{ bg: 'yellow.200' }}
    px={8}
    as="a"
    href="home"
    mt="10px"
  >
    Envoyer
  </Button>
</form>

          
        </Box>


  
        {/* Image on the Right */}
        <Box
          flexShrink={0}
          width={{ base: '100%', md: '50%' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: 8, md: 0 }} // Add margin-top for small screens
        >
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="450"
          title="Office location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        
        </Box>
      </Flex>
    </Box>



 





    </>
  );
};

export default HomePage;
