/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container, Heading, Box, Text, Spinner, Center } from '@chakra-ui/react';
import UserTable from '../components/UserTable';
import { useUserContext } from '../context/UserContext';
import { motion } from 'framer-motion';

/**
 * Main Dashboard Page
 */
const Dashboard: React.FC = () => {
  const { users, loading, error } = useUserContext();

  if (error) {
    return (
      <Container maxW="container.xl" py={10}>
        <Box bg="red.50" p={4} borderRadius="md" border="1px" borderColor="red.200">
          <Text color="red.600" fontWeight="medium">{error}</Text>
        </Box>
      </Container>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.xl">
        <Box mb={8}>
          <Heading size="lg" mb={2}>Painel de Usuários</Heading>
          <Text color="gray.600">Gerencie e visualize todos os usuários cadastrados no sistema.</Text>
        </Box>

        {loading && users.length === 0 ? (
          <Center py={20}>
            <Spinner size="xl" color="blue.500" />
          </Center>
        ) : (
          <UserTable users={users} loading={loading} />
        )}
      </Container>
    </motion.div>
  );
};

export default Dashboard;
