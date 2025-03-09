import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects: ProjectCardProps[] = [
  {
    title: 'Social Connect Platform',
    description: 'A modern platform for connecting communities and fostering meaningful interactions.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Community Analytics Dashboard',
    description: 'Advanced analytics tools for understanding community engagement and growth.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    technologies: ['Vue.js', 'Python', 'TensorFlow'],
  },
  {
    title: 'Event Management System',
    description: 'Streamlined event planning and management for social organizations.',
    image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
  },
]

function ProjectCard({ title, description, image, technologies }: ProjectCardProps) {
  return (
    <Box
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
    >
      <Box
        h={'210px'}
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}
      >
        <Image
          src={image}
          alt={title}
          layout={'fill'}
          objectFit={'cover'}
        />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {title}
        </Heading>
        <Text color={'gray.500'}>
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>Technologies</Text>
          <Text color={'gray.500'}>{technologies.join(' • ')}</Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - SocialRabbit</title>
        <meta
          name="description"
          content="Explore SocialRabbit's innovative projects in social technology and community building."
        />
      </Helmet>

      <Navbar />

      <Container maxW={'7xl'} py={12}>
        <Heading
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}
        >
          Our Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
} 