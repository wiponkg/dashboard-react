/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  Icon,
  Spinner,
  Center,
  Flex
} from '@chakra-ui/react';
import { ArrowLeft, Phone, Globe, Building, Mail, MapPin } from 'lucide-react';
import { User } from '../types/user';
import { userService } from '../services/api';
import { motion } from 'framer-motion';

/**
 * User Detail Page
 */
const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await userService.getUserById(parseInt(id));
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  if (!user) {
    return (
      <Container maxW="container.md" py={10}>
        <Text textAlign="center">Usuário não encontrado.</Text>
        <Center mt={4}>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft size={18} style={{ marginRight: '8px' }} />
            Voltar ao Painel
          </Button>
        </Center>
      </Container>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container maxW="container.lg">
        <Flex mb={6} fontSize="sm" color="gray.500" gap={2}>
          <Text cursor="pointer" onClick={() => navigate('/')} _hover={{ color: 'blue.500' }}>Painel</Text>
          <Text>/</Text>
          <Text fontWeight="bold">{user.name}</Text>
        </Flex>

        <Box bg="white" shadow="xl" borderRadius="2xl" overflow="hidden" border="1px" borderColor="gray.100">
          {/* Header Section */}
          <Box bg="blue.600" p={8} color="white">
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'start', md: 'center' }} gap={4}>
              <VStack align="start" gap={1}>
                <Heading size="xl">{user.name}</Heading>
                <Text fontSize="lg" opacity={0.9}>@{user.username}</Text>
              </VStack>
              <Button
                variant="outline"
                colorScheme="whiteAlpha"
                onClick={() => navigate('/')}
              >
                <ArrowLeft size={18} style={{ marginRight: '8px' }} />
                Voltar
              </Button>
            </Flex>
          </Box>

          <Box p={8}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
              {/* Contact Information */}
              <VStack align="start" gap={6}>
                <Heading size="md" color="blue.600">Informações de Contato</Heading>
                <VStack align="start" gap={4} w="full">
                  <HStack gap={3}>
                    <Icon as={Mail} color="gray.400" />
                    <Text fontWeight="medium">{user.email}</Text>
                  </HStack>
                  <HStack gap={3}>
                    <Icon as={Phone} color="gray.400" />
                    <Text fontWeight="medium">{user.phone}</Text>
                  </HStack>
                  <HStack gap={3}>
                    <Icon as={Globe} color="gray.400" />
                    <Text fontWeight="medium" color="blue.500" cursor="pointer">
                      {user.website}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>

              {/* Professional Information */}
              <VStack align="start" gap={6}>
                <Heading size="md" color="blue.600">Detalhes da Empresa</Heading>
                <VStack align="start" gap={4} w="full">
                  <HStack gap={3}>
                    <Icon as={Building} color="gray.400" />
                    <Box>
                      <Text fontWeight="bold">{user.company.name}</Text>
                      <Text fontSize="sm" color="gray.500" fontStyle="italic">
                        "{user.company.catchPhrase}"
                      </Text>
                    </Box>
                  </HStack>
                  <Badge colorScheme="blue" variant="subtle" px={2} py={1} borderRadius="md">
                    {user.company.bs}
                  </Badge>
                </VStack>
              </VStack>
            </SimpleGrid>

            <Box height="1px" bg="gray.100" my={8} />

            {/* Address Section */}
            <VStack align="start" gap={6}>
              <Heading size="md" color="blue.600">Localização</Heading>
              <HStack gap={3} align="start">
                <Icon as={MapPin} color="gray.400" mt={1} />
                <Box>
                  <Text fontWeight="medium">
                    {user.address.street}, {user.address.suite}
                  </Text>
                  <Text color="gray.600">
                    {user.address.city}, {user.address.zipcode}
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default UserDetail;
