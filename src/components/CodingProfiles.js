import React from 'react'
import { IconButton, HStack, Link } from '@chakra-ui/react'
import { Codeforces, Codechef, Leetcode, Hackerrank } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[3, 3, 5]}>
       
        <Link href='https://leetcode.com/u/Dishant_Dobariya/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Leetcode' bg="transparent" fontSize={["20px", "25px"]} icon={<Leetcode />} />
        </Link>

      </HStack>
    </>
  )
}
