import { Stack, HStack, VStack, Box, Text, Image, Tooltip, Center, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { Arrow } from './Icons'
import pic from '../static/images/pic.png'
import { Github, Linkedin, Twitter, Gmail } from './Icons'

const skills = [
    {
        image: pic,
        title: "Full Stack Developer",
        icons: [ <Github />, <Linkedin />], 
        description: ["Developing web applications", "Developing mobile applications"]
    },
    {
        image: pic,
        title: "Mobile Developer",
        icons: [ <Github />, <Linkedin />], 
        description: ["Developing mobile applications"]
    }
]

const SkillComponent = ({skill}) => {
    return (
        <Box w="100%" px={8} py={4}>
            <Stack direction={['column', 'column', 'row']} spacing={4} border="2px" borderRadius="lg" borderColor="blue.900" p={8} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={skill.image} alt={skill.title} w={200} h={200} />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]}>
                    <Text align={["center", "center", "left"]} fontFamily="paytone" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">{skill.title}</Text>

                    <HStack spacing={4}>
                        {skill.icons.map((icon) => (
                            icon
                        ))}
                    </HStack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">
                        {skill.description.map((desc) => (
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

export default function Skills() {
    return (
        <VStack>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Interests and Skills
            </Text>

            {skills.map((skill, index) => (
                <SkillComponent key={index} skill={skill} />
            ))}
        </VStack>
    )
}
