import React from 'react'
import { Stack, HStack, Box, Button, Text, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Arrow } from './Icons'

const projects = [
    {
        name: "Portfolio Website",
        skills: "React, Next.js, Chakra UI",
        description: ["I have built this website using React, Next.js and Chakra UI", "I have used various components and hooks provided by Chakra UI to build this website."],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        name: "Portfolio Website",
        skills: "React, Next.js, Chakra UI",
        description: ["I have built this website using React, Next.js and Chakra UI", "I have used various components and hooks provided by Chakra UI to build this website."],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        name: "Portfolio Website",
        skills: "React, Next.js, Chakra UI",
        description: ["I have built this website using React, Next.js and Chakra UI", "I have used various components and hooks provided by Chakra UI to build this website."],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        name: "Portfolio Website",
        skills: "React, Next.js, Chakra UI",
        description: ["I have built this website using React, Next.js and Chakra UI", "I have used various components and hooks provided by Chakra UI to build this website."],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        name: "Portfolio Website",
        skills: "React, Next.js, Chakra UI",
        description: ["I have built this website using React, Next.js and Chakra UI", "I have used various components and hooks provided by Chakra UI to build this website."],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        name: "Portfolio Website",
        skills: "React, Next.js, Chakra UI",
        description: ["I have built this website using React, Next.js and Chakra UI", "I have used various components and hooks provided by Chakra UI to build this website."],
        website: "https://csi-nirma.vercel.app/"
    }
]

const ProjectComponent = ({ project }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <Stack direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{project.name}</Text>

                        <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{project.skills}</Text>
                    </Stack>
                </CardHeader>

                <CardBody>
                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">
                        {project.description.map((project) => (
                            <ListItem key={project}>
                                <ListIcon as={Arrow} />
                                {project}
                            </ListItem>
                        ))}
                    </List>
                </CardBody>

                <CardFooter w="100%" justify="right">
                    <Link href={project.website} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Github Link</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function ProjectCards() {
    return (
        <>
            <Wrap my={2} py={3} px={5} justify="center" spacing={[8, 8, 10, 12]}>
                {projects.map((project, index) => (
                    <ProjectComponent key={index} project={project} />
                ))}
            </Wrap>

            <Box pt={10} pb={4} align="center">
                <Link href='https://github.com/arunimabarik75?tab=repositories' isExternal>
                    <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                        <HStack>
                            <Text>See All Projects</Text>
                            <ExternalLinkIcon w={6} h={6} />
                        </HStack>
                    </Button>
                </Link>
            </Box>
        </>
    )
}
