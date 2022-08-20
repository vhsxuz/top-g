import { Box, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import React from 'react'

function Cards() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    title: 'Top G West Jakarta',
    currentCapacity: '150',
    maxCapacity: 34,
    rating: 4,
  }
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box mt='4'>
          Current Capacity: {property.currentCapacity}
        </Box>

        <Box>
          Max Capacity: {property.maxCapacity}
        </Box>
      </Box>
    </Box>
  )
}

export default Cards