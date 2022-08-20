import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const isErrorEmail = email === ''

  const [password, setPassword] = useState('')
  const handlePasswordChange = (e: any) => setEmail(e.target.value)
  const isErrorPassword = password === ''

  return (
    <Stack p='36'>
      <FormControl isInvalid={isErrorEmail} mb='8'>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          value={email}
          onChange={handleEmailChange}
        />
        {!isErrorEmail ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isErrorPassword}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        {!isErrorPassword ? (
          <FormHelperText>
            Create strong password by combining words and letters
          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
    </Stack>
  )
}

export default Login;