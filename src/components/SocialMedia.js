import React from 'react'
import { Text, IconButton, HStack, Link, Button } from '@chakra-ui/react'
import { Github, Linkedin, Twitter, Gmail, Star } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[4, 4, 6]}>
        <Link href='mailto:arunimabarik75@gmail.com' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["18px", "20px"]} icon={<Gmail />} />
        </Link>

        <Link href='https://www.linkedin.com/in/arunima-barik/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Linkedin' bg="transparent" fontSize={["18px", "20px"]} icon={<Linkedin />} />
        </Link>

        <Link href='https://github.com/arunimabarik75/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["18px", "20px"]} icon={<Github />} />
        </Link>

        <Link href='https://twitter.com/arunima_barik' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Twitter' bg="transparent" fontSize={["18px", "20px"]} icon={<Twitter />} />
        </Link>
      </HStack>

      <Link href='https://github.com/arunimabarik75/Portfolio-Website' isExternal>
        <Button mt={3} p={6} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
          <HStack spacing={2}>
            <Star />
            <Text>Star Me on Github</Text>
          </HStack>
        </Button>
      </Link>
    </>
  )
}
