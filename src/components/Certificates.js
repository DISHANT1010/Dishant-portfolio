import React from 'react'
import { HStack, Box, Button, Image, Text, Link, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem } from '@chakra-ui/react'
import pic from '../static/images/pic.png'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const certificates = [
    {
        image: pic,
        name: "Machine Learning",
        author: "Andrew NG",
        link: "https://csi-nirma.vercel.app/"
    },
    {
        image: pic,
        name: "Machine Learning",
        author: "Andrew NG",
        link: "https://csi-nirma.vercel.app/"
    },
    {
        image: pic,
        name: "Machine Learning",
        author: "Andrew NG",
        link: "https://csi-nirma.vercel.app/"
    }
]

const CertificateComponent = ({ certificate }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <Image src={certificate.image} alt={certificate.name} w={200} h={200} />
                </CardHeader>

                <CardBody>
                    <Box direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} mb={4} rounded="lg">
                        <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{certificate.name}</Text>
                    </Box>

                    <Text align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">{certificate.author}</Text>
                </CardBody>

                <CardFooter w="100%" justify="center">
                    <Link href={certificate.link} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Certificate</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function Certificates() {
    return (
        <Wrap mt={2} mb={4} py={3} px={5} justify="center" spacing={[8, 8, 10, 12]}>
            {certificates.map((certificate, index) => (
                <CertificateComponent key={index} certificate={certificate} />
            ))}
        </Wrap>
    )
}
