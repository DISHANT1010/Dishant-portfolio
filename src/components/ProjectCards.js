import React from 'react'
import { Stack, HStack, Box, Button, Text, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        name: "PrankSter",
        skills: "AWS",
        description: [
            "Migrated Prankster application from local server to AWS; hosted React frontend on S3 + CloudFront and deployed Node.js backend to Elastic Beanstalk using ZIP archive stored in S3. Implemented CI/CD pipeline for automated build deployment and version control ensuring seamless delivery and reduced manual effort.",
            "Configured Auto Scaling and Load Balancer on Elastic Beanstalk to ensure high availability, fault tolerance, and efficient traffic distribution."
        ],
        website: "https://pslink.world"
    },
    {
        name: "Wanderlust-A Travell Blog App",
        skills: "Docker, Jenkins, K8s, ArgoCD",
        description: [
            "Developed and maintained CI/CD pipelines using Jenkins to automate build, test, and deployment processes for a React frontend and Node.js backend application.",
            "Containerized application components using Docker and pushed images to Docker Hub for version control and efficient deployment.",
            "Deployed the application on a Kubernetes cluster to ensure high availability, scalability, and streamlined management of microservices."
        ],
        website: "https://github.com/DISHANT1010/wanderlust-Devops-project"
    },
    {
        name: "StudyNotion(Edtech Plateform)",
        skills: "React, Node.js, Express js, MongoDB",
        description: [
            "Developed a scalable online learning platform using React.js for the frontend and Node.js with Express.js for the backend.",
            "Engineered a robust MongoDB database structure that enhanced transaction management security, resulting in the successful handling of over 1,000 transactions daily with zero data breaches reported during internship tenure.",
            "Implemented authentication and authorization using JWT to secure user access."
        ],
        website: "https://github.com/DISHANT1010/StudyNotion"
    },
    
    
]

const ProjectComponent = ({ project }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} minH={['0px', '0px', '650px', '780px']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <Stack justify="center" minH={['0px', '0px', '150px', '200px']} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{project.name}</Text>

                        <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{project.skills}</Text>
                    </Stack>
                </CardHeader>

                <CardBody>
                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={4}>
                        {project.description.map((project) => (
                            <ListItem key={project}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
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
            <Wrap py={3} px={4} justify="center" spacing={[8, 8, 10, 12]}>
                {projects.map((project, index) => (
                    <ProjectComponent key={index} project={project} />
                ))}
            </Wrap>

            <Box pt={10} align="center">
                <Link href='https://github.com/DISHANT1010?tab=repositories' isExternal>
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
