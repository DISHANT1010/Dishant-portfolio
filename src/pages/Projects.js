import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import projects from '../static/images/projects.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Projects
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
            Built and deployed projects across Web Development integrating DevOps practices like CI/CD, containerization, and cloud infrastructure as part of college curriculum, internships, and self-learning
            </Text>
        </>
    )
}

export default function Projects() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={projects} />
            <ProjectCards />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
