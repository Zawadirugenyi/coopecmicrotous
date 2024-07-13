import React, { useState, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Select, useToast, Grid, GridItem, Image } from '@chakra-ui/react';
import axios from 'axios';
import backgroundImage from '../Components/Assets/Room2.webp'; 

const Booking = () => {
  const [formData, setFormData] = useState({
    room: '',
    tenant: '',
    check_in_date: '',
    check_out_date: ''
  });
  const [rooms, setRooms] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const toast = useToast();

  useEffect(() => {
    // Fetch rooms and tenants from the API
    const fetchRoomsAndTenants = async () => {
      try {
        const roomsResponse = await axios.get('http://127.0.0.1:8000/api/rooms/');
        const tenantsResponse = await axios.get('http://127.0.0.1:8000/api/tenants/');
        setRooms(roomsResponse.data);
        setTenants(tenantsResponse.data);
      } catch (error) {
        console.error('Error fetching rooms and tenants:', error);
      }
    };

    fetchRoomsAndTenants();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found.');
      }

      const response = await axios.post('http://127.0.0.1:8000/api/bookings/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      });

      setSuccess('Booking created successfully');
      setError('');
      toast({
        title: 'Booking created successfully.',
        description: 'The booking has been successfully created.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        room: '',
        tenant: '',
        check_in_date: '',
        check_out_date: ''
      });
    } catch (error) {
      setError('Booking creation failed');
      setSuccess('');
      console.error('Error during booking creation:', error);
      toast({
        title: 'Booking creation failed.',
        description: 'There was an error creating the booking.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} w="800px" mx="auto" mt={10} p={5}>
      <GridItem>
        <Box borderWidth={1} borderRadius="lg" p={5} w="450px" marginLeft="-240px">
          <form onSubmit={handleSubmit}>
            <FormControl id="room" mb={4}>
              <FormLabel>Room</FormLabel>
              <Select name="room" value={formData.room} onChange={handleChange}>
                <option value="">Select Room</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.number}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl id="tenant" mb={4}>
              <FormLabel>Tenant</FormLabel>
              <Select name="tenant" value={formData.tenant} onChange={handleChange}>
                <option value="">Select Tenant</option>
                {tenants.map((tenant) => (
                  <option key={tenant.id} value={tenant.id}>
                    {tenant.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl id="check_in_date" mb={4}>
              <FormLabel>Check-in Date</FormLabel>
              <Input type="date" name="check_in_date" value={formData.check_in_date} onChange={handleChange} />
            </FormControl>

            <FormControl id="check_out_date" mb={4}>
              <FormLabel>Check-out Date</FormLabel>
              <Input type="date" name="check_out_date" value={formData.check_out_date} onChange={handleChange} />
            </FormControl>

            <Button type="submit"   bg="#0097b2"
              color="white"
              _hover={{ bg: "#073d47" }} width="full" mt={4}>
              Create Booking
            </Button>
          </form>

          {error && <Box color="red.500" mt={4}>{error}</Box>}
          {success && <Box color="green.500" mt={4}>{success}</Box>}
        </Box>
      </GridItem>
      
      <GridItem>
        <Box borderWidth={1} borderRadius="lg" p={5} textAlign="center" >
         <Box 
        w="700px"
        p={6}
        height="340px"
        bg="gray.100"
        boxShadow="lg"
        bgSize="cover"
        bgPosition="center"
        mr={6} 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

          <Box mt={4} fontWeight="bold">
            Book Your Stay
          </Box>
          <Box mt={2} color="gray.500">
            Find the perfect room and enjoy your stay at our SmartHostelPro.
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Booking;