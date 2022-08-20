import { Stack, Center } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import React from 'react'
import Cards from '../../components/Cards';

function GymList() {
  return (
    <Stack>
      <Center>
        <Cards />
      </Center>
    </Stack>
  )
}

export default GymList