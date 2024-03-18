import React from 'react'
import { Text, IconButton, HStack, Link, Button } from '@chakra-ui/react'
import { Github, Linkedin, Twitter, Gmail, Star } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[3, 3, 5]}>
        <Link href='mailto:arunimabarik75@gmail.com' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["25px", "30px", "30px"]} icon={<Gmail />} />
        </Link>

        <Link href='https://www.linkedin.com/in/arunima-barik/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Linkedin' bg="transparent" fontSize={["30px", "40px", "40px"]} icon={<Linkedin />} />
        </Link>

        <Link href='https://github.com/arunimabarik75/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["30px", "40px", "40px"]} icon={<Github />} />
        </Link>

        <Link href='https://twitter.com/arunima_barik' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Twitter' bg="transparent" fontSize={["30px", "40px", "40px"]} icon={<Twitter />} />
        </Link>
      </HStack>
    </>
  )
}
