import { Box, Flex, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' m='4'>
      <Box p='2'>
        <Heading size='md'>Top G</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Link to='/register'>
          <Button colorScheme='teal' size='sm'>
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button colorScheme='teal' size='sm'>
            Login
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  )
}

export default Navbar