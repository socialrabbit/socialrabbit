import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - SocialRabbit</title>
        <meta
          name="description"
          content="Learn about SocialRabbit's mission, values, and the team behind our innovative social technology solutions."
        />
      </Helmet>

      <Navbar />

      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'brand.100',
                  zIndex: -1,
                }}
              >
                Our Mission
              </Text>
              <br />
              <Text as={'span'} color={'brand.500'}>
                Connecting Communities
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              At SocialRabbit, we believe in the power of technology to bring
              people together. Our mission is to create innovative solutions that
              enhance digital interactions while maintaining the human element at
              their core. We're passionate about building tools that help
              communities thrive in the digital age.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Text
                color={'brand.500'}
                fontWeight={600}
                fontSize={'xl'}
                px={3}
                py={1}
                bg={'brand.50'}
                rounded={'full'}
              >
                Innovation
              </Text>
              <Text
                color={'brand.500'}
                fontWeight={600}
                fontSize={'xl'}
                px={3}
                py={1}
                bg={'brand.50'}
                rounded={'full'}
              >
                Community
              </Text>
              <Text
                color={'brand.500'}
                fontWeight={600}
                fontSize={'xl'}
                px={3}
                py={1}
                bg={'brand.50'}
                rounded={'full'}
              >
                Impact
              </Text>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('brand.50', 'brand.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'About Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee'}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
} 