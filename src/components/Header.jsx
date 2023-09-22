import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={ 100 } marginBottom='1rem' />
        <Heading color='white' marginBottom='1rem'>
            AI Keyword Extractor for ETSY Listings
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your product description to get keywords for your listing
        </Text>
    </>
  )
}

export default Header
