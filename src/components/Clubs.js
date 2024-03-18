import React from 'react'
import { Stack, HStack, VStack, Button, Text, Image, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Arrow } from './Icons'
import pic from '../static/images/pic.png'

const clubs = [
    {
        image: pic,
        name: "Computer Society of India",
        duration: "2020 - 2024",
        position: "Vice President",
        description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        image: pic,
        name: "Computer Society of India",
        duration: "2020 - 2024",
        position: "Vice President",
        description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."],
        website: "https://csi-nirma.vercel.app/"
    }
]

const ClubComponent = ({ club }) => {
    return (
        <Card maxW='md' border="0px" bg="transparent" shadow="xl">
            <CardHeader align="center">
                <Image src={club.image} alt={club.name} w={200} h={200} />
            </CardHeader>

            <CardBody>
                <Stack direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg" mb={4}>

                    <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{club.name}</Text>

                    <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{club.position}</Text>

                    <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{club.duration}</Text>
                </Stack>

                <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">
                    {club.description.map((club) => (
                        <ListItem key={club}>
                            <ListIcon as={Arrow} />
                            {club}
                        </ListItem>
                    ))}
                </List>
            </CardBody>

            <CardFooter w="100%" justify="right">
                <Link href={club.website} isExternal>
                    <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                        <HStack>
                            <Text>Visit Website</Text>
                            <ExternalLinkIcon w={6} h={6} />
                        </HStack>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function Clubs() {
    return (
        <VStack>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Clubs
            </Text>

            <Stack my={2} py={3} px={8} spacing={[5, 5, 5, 20]} direction={['column', 'column', 'row']}>
                {clubs.map((club, index) => (
                    <ClubComponent key={index} club={club} />
                ))}
            </Stack>

        </VStack>
    )
}
