import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import pic from '../static/images/pic.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Projects
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
                Made projects in the field of Data Science, Machine Learning and Web Development
            </Text>
        </>
    )
}

export default function Education() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={pic} />
            <ProjectCards />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
