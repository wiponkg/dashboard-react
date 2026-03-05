/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Input, Box, Button, Flex } from '@chakra-ui/react';
import { Search, Eye } from 'lucide-react';
import { User } from '../types/user';
import { useNavigate } from 'react-router-dom';

interface UserTableProps {
  users: User[];
  loading: boolean;
}

/**
 * User Table component using PrimeReact DataTable and Chakra UI for search
 */
const UserTable: React.FC<UserTableProps> = ({ users, loading }) => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const navigate = useNavigate();

  // Template for the action column
  const actionTemplate = (rowData: User) => {
    return (
      <Button
        size="sm"
        colorScheme="blue"
        variant="ghost"
        onClick={() => navigate(`/user/${rowData.id}`)}
      >
        <Eye size={16} style={{ marginRight: '8px' }} />
        Detalhes
      </Button>
    );
  };

  // Template for the city column (nested data)
  const cityTemplate = (rowData: User) => {
    return rowData.address.city;
  };

  // Template for the company column (nested data)
  const companyTemplate = (rowData: User) => {
    return rowData.company.name;
  };

  return (
    <Box className="card shadow-sm rounded-lg overflow-hidden bg-white p-4">
      <Box mb={6}>
        <Flex align="center" maxW="400px" gap={2} border="1px" borderColor="gray.200" borderRadius="md" px={3} py={1}>
          <Search color="gray" size={18} />
          <Input
            placeholder="Buscar usuários..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            border="none"
            _focus={{ outline: 'none', boxShadow: 'none' }}
          />
        </Flex>
      </Box>

      <DataTable
        value={users}
        loading={loading}
        globalFilter={globalFilter}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        className="p-datatable-sm"
        emptyMessage="Nenhum usuário encontrado."
        responsiveLayout="scroll"
        sortMode="multiple"
      >
        <Column field="name" header="Nome" sortable filter filterPlaceholder="Buscar por nome" />
        <Column field="email" header="E-mail" sortable />
        <Column body={companyTemplate} header="Empresa" sortable />
        <Column body={cityTemplate} header="Cidade" sortable />
        <Column body={actionTemplate} header="Ações" style={{ width: '120px' }} />
      </DataTable>
    </Box>
  );
};

export default UserTable;
