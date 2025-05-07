import { Stack, Box, Center, Text, Image, List, ListItem, ListIcon, Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import Apex from '../static/images/Apex.png'
import deshaw from '../static/images/deshaw.png'
import google from '../static/images/google.png'

const works = {
    "Internship": [
        {
            image: Apex,
            name: "Apex SoftTech Software Solution",
            duration: "Jan 2025 - Current",
            position: "DevOps Engineer",
            location: "Surat, Gujarat",
            description: [
                "Developed, deployed, and maintained web applications on company servers using CI/CD pipelines.",
                "Automated build, test, and deployment processes using tools like Jenkins, GitLab CI, and shell scripting.",
                "Managed version control, environment configurations, and infrastructure as code (IaC) using Git and Terraform.",
                "Containerized applications using Docker and managed deployments on staging and production environments.",
                "Migrated on-premise applications to cloud infrastructure, leveraging AWS Elastic Beanstalk for streamlined deployment, S3 for robust storage, and CloudFront for fast content delivery.",
            ]
        },
        
    ]
}

const WorkComponent = ({ work }) => {
    return (
        <Box w="100%" px={2} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={work.image} alt={work.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
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

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {work.description.map((desc) => (
                            <ListItem key={desc}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
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
                <AccordionButton rounded="xl" p={5} border="2px" borderColor="blue.900" color="blue.900" _hover={{ bg: 'blue.900', color: 'white' }} _expanded={{ bg: 'blue.900', color: 'white', roundedBottom: '0px' }}>
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
