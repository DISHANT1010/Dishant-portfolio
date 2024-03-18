import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import CodingProfiles from '../components/CodingProfiles'
import Degrees from '../components/Degrees'
import Clubs from '../components/Clubs'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import pic from '../static/images/pic.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Education
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
                Courses attended and Club activities
            </Text>
            <CodingProfiles />
        </>
    )
}

export default function Education() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={pic} />
            <Degrees />
            <Clubs />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
