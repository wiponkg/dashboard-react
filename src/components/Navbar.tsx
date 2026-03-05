/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';
import { Users } from 'lucide-react';

/**
 * Simple Navbar component using Chakra UI
 */
const Navbar: React.FC = () => {
  return (
    <Box bg="blue.600" color="white" py={4} shadow="md" mb={8}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={2}>
            <Users size={24} />
            <Heading size="md" letterSpacing="tight">
              PainelUsuário
            </Heading>
          </Flex>
          <Text fontSize="sm" fontWeight="medium" display={{ base: 'none', md: 'block' }}>
            Sistema Profissional de Gestão
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
