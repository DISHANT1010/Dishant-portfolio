import { Stack, VStack, Box, Text, Image, Center, Wrap, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import * as icons from './Icons'
import cp from '../static/images/cp.png'
import dsa from '../static/images/dsa.png'
import datascience from '../static/images/datascience.png'
import webdev from '../static/images/webdev.png'

const skills = [
    // {
    //     image: cp,
    //     title: "Competitive Programming",
    //     icons: [icons.Codeforces, icons.Codechef, icons.Hackerrank],
    //     description: [
    //         "Solved 600+ questions on Competitive Programming platforms",
    //         "Specialist (Max. Rating 1467) on Codeforces",
    //         "3 Star (Max. Rating 1689) on CodeChef",
    //         "5 Star badge in Problem Solving on HackerRank"
    //     ]
    // },
    {
        image: dsa,
        title: "Data Structures and Algorithms",
        icons: [icons.Leetcode, icons.Gfg, icons.Interviewbit],
        description: [
            "Solved 500+ questions on LeetCode",
            "Good grasp on Arrays, Linked Lists, Stacks, Queues, Trees and Graphs",
            "Appreciable knowledge in Design and Analysis of Algorithms",
            "Prefer using C++ for implementation"
        ]
    },

    {
        image: webdev,
        title: "DevOps Engineer",
        icons: [],
        description: [
            "Continuous Integration/Continuous Deployment (CI/CD)",
            "Version Control Systems",
            "Containerization and Orchestration",
            "Infrastructure as Code (IaC)",
            "Cloud Platforms(AWS,Azure)",
            "Scripting and Automation"
        ]
    }
]

const SkillComponent = ({ skill }) => {
    return (
        <Box w="100%" px={8} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={skill.image} alt={skill.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >
                    <Box direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{skill.title}</Text>
                    </Box>

                    <Wrap spacing={5} fontSize="xl" py={2} justify={["center", "center", "center", "left"]}>
                        {skill.icons.map((Icon, index) => (
                            <Icon />
                        ))}
                    </Wrap>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {skill.description.map((desc) => (
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

export default function Skills() {
    return (
        <VStack>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Interests and Skills
            </Text>

            {
                skills.map((skill, index) => (
                    <SkillComponent key={index} skill={skill} />
                ))
            }
        </VStack>
    )
}
