import { Stack, HStack, VStack, Box, Button, Center, Text, Image, Link, List, ListItem, ListIcon, Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react'
import React from 'react'
import { Arrow } from './Icons'
import pic from '../static/images/pic.png'

const works = {
    "Internship": [
        {
            image: pic,
            name: "Google",
            duration: "May 2022 - Aug 2022",
            position: "STEP Intern",
            location: "Mountain View, California",
            description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."],
        },
        {
            image: pic,
            name: "Google",
            duration: "May 2022 - Aug 2022",
            position: "STEP Intern",
            location: "Mountain View, California",
            description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."]
        }
    ]
    ,
    "Full Time": [
        {
            image: pic,
            name: "Google",
            duration: "May 2022 - Aug 2022",
            position: "STEP Intern",
            location: "Mountain View, California",
            description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."]
        },
        {
            image: pic,
            name: "Google",
            duration: "May 2022 - Aug 2022",
            position: "STEP Intern",
            location: "Mountain View, California",
            description: ["I am currently pursuing my B.Tech in Computer Science from Nirma University", "I have learnt various technologies and tools in the field of computer science and have developed various projects and applications."]
        }
    ]
}

const WorkComponent = ({ work }) => {
    return (
        <Box w="100%" my={2} px={8} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={work.image} alt={work.name} w={200} h={200} />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >

                    <Stack direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{work.name}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{work.position}</Text>
                        </Stack>

                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{work.duration}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{work.location}</Text>
                        </Stack>
                    </Stack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">
                        {work.description.map((desc) => (
                            <ListItem key={desc}>
                                <ListIcon as={Arrow} />
                                {desc}
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </Stack >
        </Box >
    )
}

const WorkAccordion = ({ workType, work }) => {
    return (
        <Accordion allowToggle mb={8}>
            <AccordionItem rounded="xl">
                <AccordionButton rounded="xl" p={5} border="2px" borderColor="blue.900" _hover={{ bg: 'blue.900', color: 'white' }} _expanded={{ bg: 'blue.900', color: 'white', roundedBottom: '0px' }}>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "left"]}>
                            {workType}
                        </Text>
                    </Box>
                    <AccordionIcon w={8} h={8} />
                </AccordionButton>
                <AccordionPanel roundedBottom="xl" border="2px" borderColor="blue.900">
                    {
                        work.map((w, index) => (
                            <WorkComponent key={index} work={w} />
                        ))
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default function Works() {
    return (
        <Box py={4} px={[5, 5, 8, 10]}>
            {
                Object.keys(works).map((workType, index) => (
                    <WorkAccordion key={index} workType={workType} work={works[workType]} />
                ))
            }
        </Box>
    )
}
