import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Link,
  Button,
  Stack,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const ContactForm = () => {
  return (
    <Box w="100%" align="center">
      <Box maxW="lg" bg="white" borderRadius="xl" border="2px" borderColor="blue.900" p={8} color="blue.900">
        <VStack spacing={5}>
          <Text fontFamily="paytone" align="center" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
            Send Me a Message!
          </Text>
          <FormControl id="name">
            <FormLabel fontfamily="workSans" fontsize={['xl', 'xl', '2xl', '3xl']}>Name</FormLabel>
            <InputGroup borderColor="gray.600">
              <Input type="text" size="lg" />
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <FormLabel fontfamily="workSans" fontsize={['xl', 'xl', '2xl', '3xl']}>E-mail</FormLabel>
            <InputGroup borderColor="gray.600">
              <Input type="text" size="lg" />
            </InputGroup>
          </FormControl>
          <FormControl id="message">
            <FormLabel fontfamily="workSans" fontsize={['xl', 'xl', '2xl', '3xl']}>Message</FormLabel>
            <Textarea
              borderColor="gray.600"
            />
          </FormControl>
          <FormControl id="send">
            <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
              <HStack>
                <Text>Send Message</Text>
                <EmailIcon w={6} h={6} />
              </HStack>
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  )
}

const SocialMedia = ({ props }) => {
  return (
    <VStack justify="center" px={8} w="100%" {...props}>
      <Text fontFamily="paytone" align="center" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
        Find Me on Social Media
      </Text>
      <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
        Let's connect and grow together
      </Text>

      <VStack spacing={4}>
        <Link href="www.abc.com" isExternal>
          <Button p={[5, 5, 7, 8]} w="xs" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack>
              <Text>Gmail</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="www.abc.com" isExternal>
          <Button p={[5, 5, 7, 8]} w="xs" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack>
              <Text>LinkedIn</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="www.abc.com" isExternal>
          <Button p={[5, 5, 7, 8]} w="xs" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack>
              <Text>Github</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="www.abc.com" isExternal>
          <Button p={[5, 5, 7, 8]} w="xs" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack>
              <Text>Twitter</Text>
            </HStack>
          </Button>
        </Link></VStack>
    </VStack>
  )
}

export default function Contact() {
  return (
    <Stack w="100%" px={10} spacing={[5,0,0]} my={10} direction={['column', 'column', 'row']}>
      <ContactForm />
      <SocialMedia />
    </Stack>
  )
}