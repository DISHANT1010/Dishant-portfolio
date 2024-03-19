import { Stack, HStack, VStack, Box, Button, Center, Text, Image, Link, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Arrow } from './Icons'
import pic from '../static/images/pic.png'

const degrees = [
    {
        image: pic,
        name: "Nirma University",
        duration: "2020 - 2024",
        degree: "B.Tech in Computer Science",
        score: "9.0 / 10.0",
        description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."],
        website: "https://www.nirmauni.ac.in/"
    },
    {
        image: pic,
        name: "Nirma University",
        duration: "2020 - 2024",
        degree: "B.Tech in Computer Science",
        score: "9.0 / 10.0",
        description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."],
        website: "https://www.nirmauni.ac.in/"
    }
]

const DegreeComponent = ({ degree }) => {
    return (
        <Box w="100%" my={2} px={8} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={degree.image} alt={degree.name} w={200} h={200} />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >

                    <Stack direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{degree.name}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{degree.degree}</Text>
                        </Stack>

                        <Stack w={["100%", "100%", "100%", "50%"]} direction={['row', 'row', 'row','column']}>
                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} w={["50%", "50%", "50%", "100%"]} align={["left", "left", "left", "right"]}>{degree.duration}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} w={["50%", "50%", "50%", "100%"]} align="right">{degree.score}</Text>
                        </Stack>
                    </Stack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">
                        {degree.description.map((desc) => (
                            <ListItem key={desc}>
                                <ListIcon as={Arrow} />
                                {desc}
                            </ListItem>
                        ))}
                    </List>

                    <Box w="100%" align="right">
                        <Link href={degree.website} isExternal>
                            <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                                <HStack>
                                    <Text>Visit Website</Text>
                                    <ExternalLinkIcon w={6} h={6} />
                                </HStack>
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Stack >
        </Box >
    )
}

export default function Skills() {
    return (
        <VStack spacing={0}>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Degrees
            </Text>

            {degrees.map((degree, index) => (
                <DegreeComponent key={index} degree={degree} />
            ))}
        </VStack>
    )
}
