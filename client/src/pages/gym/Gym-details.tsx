import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Center, Heading, Image, Stack, Text } from '@chakra-ui/react';

function GymDetails() {

  const [gym, setGym] = useState<any>([]);
  let token = document.cookie.slice(6);
  const navigate = useNavigate()
  const id = useParams()

  useEffect(() => {
    getAllGym()
  }, [])

  const getAllGym = async () => {
    console.log(id.id)
    await axios.get(`http://localhost:8000/api/v1/gym/${id.id}`, {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      console.log(response.data.gymInfo)
      setGym(response.data.gymInfo)
    })
  }

  return (
    <Stack>
      <Center>
        <Heading>
          {gym.name}
        </Heading>
      </Center>
      <Center pt='4'>
        <Image src={gym.imageLink} w='50%' />
      </Center>
      <Center>
        <Text>
          address: {gym.address}
        </Text>
      </Center>
      <Center>
        <Text>
          current capacity: {gym.currentCapacity}
        </Text>
      </Center>
      <Center>
        <Text>
          max capacity: {gym.maxCapacity}
        </Text>
      </Center>
    </Stack>
  )
}

export default GymDetails