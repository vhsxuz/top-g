import { Stack, Center, Box, Heading, Image, Button, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import axios from 'axios';

function GymList() {
  const [gyms, setGyms] = useState<any>([]);
  let token = document.cookie.slice(6);

  useEffect(() => {
    getAllGym()
  }, [])

  const getAllGym = async () => {
    await axios.get('http://localhost:8000/api/v1/gym', {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setGyms(response.data.gymList)
      console.log(response.data.gymList)
    })
  }

  return (
    <Stack align='center'>
      {
        gyms.map((gym: any) => {
          return (
            <VStack display='flex'>
              <Box maxW='sm' borderWidth='1px' mb='8' borderRadius='lg' overflow='hidden' key={gym.id} >
                <Image src={gym.imageLink} alt={gym.name} />
                <Box p='4'>
                  <Heading as='h4' size='md'>
                    {gym.name}
                  </Heading>
                </Box>
                <Button m='4' colorScheme='teal'>
                  Details
                </Button>
              </Box>
            </VStack>
          )
        })
      }
      {/* <Cards /> */}
    </Stack >
  )
}

export default GymList