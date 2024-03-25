import {
  Box,
  Text,
  Link,
  Button,
  Stack,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { EmailIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);

    // Submit form data (replace with your logic)
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Box pl={8} pr={[8, 8, 0]} w="100%" align="center">
      <Box maxW="lg" bg="white" borderRadius="xl" border="2px" borderColor="blue.900" p={8} color="blue.900">

        <Text mb={5} fontFamily="paytone" align="center" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
          Send Me a Message!
        </Text>

        <form onSubmit={handleSubmit}>

          <VStack spacing={5}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name" fontfamily="workSans" fontsize={['xl', 'xl', '2xl', '3xl']}>Name</FormLabel>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                borderColor="blue.900"
                size={["md", "md", "lg"]}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email" fontfamily="workSans" fontsize={['xl', 'xl', '2xl', '3xl']}>Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                borderColor="blue.900"
                size={["md", "md", "lg"]}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor="message" fontfamily="workSans" fontsize={['xl', 'xl', '2xl', '3xl']}>Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                borderColor="blue.900"
                size={["md", "md", "lg"]}
              />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>

            <Button type="submit" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
              <HStack>
                <Text>Send Message</Text>
                <EmailIcon w={6} h={6} />
              </HStack>
            </Button>

          </VStack>
        </form>

      </Box>
    </Box>
  );
}

const SocialMedia = ({ props }) => {
  return (
    <VStack pr={4} pl={[4, 4, 0]} justify="center" w="100%" {...props}>
      <Text fontFamily="paytone" align="center" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
        Find Me on Social Media
      </Text>
      <Text mb={3} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
        Let's connect and grow together
      </Text>

      <VStack spacing={3}>
        <Link href="mailto:arunimabarik75@gmail.com" isExternal>
          <Button h={["50px", "50px", "60px"]} w="300px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="40%" align="right">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Box>
              <Text w="60%" align="left">Gmail</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/arunima-barik/" isExternal>
          <Button h={["50px", "50px", "60px"]} w="300px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="40%" align="right">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Box>
              <Text w="60%" align="left">LinkedIn</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="https://github.com/arunimabarik75/" isExternal>
          <Button h={["50px", "50px", "60px"]} w="300px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="40%" align="right">
                <FontAwesomeIcon icon={faGithub} />
              </Box>
              <Text w="60%" align="left">Github</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="https://twitter.com/arunima_barik" isExternal>
          <Button h={["50px", "50px", "60px"]} w="300px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["xl", "xl", "2xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="40%" align="right">
                <FontAwesomeIcon icon={faTwitter} />
              </Box>
              <Text w="60%" align="left">Twitter</Text>
            </HStack>
          </Button>
        </Link>
      </VStack>

    </VStack>
  )
}

export default function Contact() {
  return (
    <Stack w="100%" spacing={[8, 8, 4]} mt={16} direction={['column', 'column', 'row']}>
      <ContactForm />
      <SocialMedia />
    </Stack>
  )
}