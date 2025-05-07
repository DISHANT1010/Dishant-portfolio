import React from 'react'
import { Text, IconButton, HStack, Link, Button } from '@chakra-ui/react'
import { Github, Linkedin, TwitterX, Gmail, Star } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[4, 4, 6]}>
        <Link href='mailto:dobariyadishant@gmail.com' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["18px", "20px"]} icon={<Gmail />} />
        </Link>

        <Link href='https://www.linkedin.com/in/dishant-dobariya-41468a29a/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Linkedin' bg="transparent" fontSize={["18px", "20px"]} icon={<Linkedin />} />
        </Link>

        <Link href='https://github.com/DISHANT1010/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["18px", "20px"]} icon={<Github />} />
        </Link>

        <Link href='https://x.com/DobariyaDi7408' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Twitter' bg="transparent" fontSize={["18px", "20px"]} icon={<TwitterX />} />
        </Link>
      </HStack>
    </>
  )
}
