/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import axios from 'axios';
import { User } from '../types/user';

const API_URL = 'https://jsonplaceholder.typicode.com';

const brazilianNames = [
  'João Silva', 'Maria Oliveira', 'Pedro Santos', 'Ana Souza', 'Lucas Pereira',
  'Julia Ferreira', 'Gabriel Alves', 'Beatriz Lima', 'Mateus Costa', 'Larissa Rocha'
];

const brazilianCities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre',
  'Salvador', 'Fortaleza', 'Brasília', 'Recife', 'Manaus'
];

const brazilianCompanies = [
  'Tech Soluções BR', 'Inova Digital', 'Logística Express', 'Banco do Futuro', 'Alimentos Saudáveis',
  'Energia Renovável', 'Varejo Total', 'Saúde & Vida', 'Educação Global', 'Construções Seguras'
];

const brazilianStreets = [
  'Av. Paulista', 'Rua das Flores', 'Rua Sete de Setembro', 'Av. Atlântica', 'Rua da Bahia',
  'Av. Afonso Pena', 'Rua XV de Novembro', 'Av. Beira Mar', 'Rua do Ouvidor', 'Av. Brasil'
];

const brazilianPhones = [
  '(11) 98765-4321', '(21) 91234-5678', '(31) 99887-7665', '(41) 98877-6655', '(51) 97766-5544',
  '(71) 96655-4433', '(85) 95544-3322', '(61) 94433-2211', '(81) 93322-1100', '(92) 92211-0099'
];

/**
 * Service to handle API calls related to users
 */
export const userService = {
  /**
   * Fetches all users from the API and Brazilianizes the data
   */
  getUsers: async (): Promise<User[]> => {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data.map((user, index) => {
      const name = brazilianNames[index % brazilianNames.length];
      const city = brazilianCities[index % brazilianCities.length];
      const companyName = brazilianCompanies[index % brazilianCompanies.length];
      const street = brazilianStreets[index % brazilianStreets.length];
      const phone = brazilianPhones[index % brazilianPhones.length];
      const email = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '.') + '@exemplo.com.br';
      const website = 'www.' + companyName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com.br';
      
      return {
        ...user,
        name,
        email,
        phone,
        website,
        address: {
          ...user.address,
          city,
          street,
          suite: `Apto ${100 + index}`,
          zipcode: `${30000 + index * 1000}-${100 + index}`
        },
        company: {
          ...user.company,
          name: companyName
        }
      };
    });
  },

  /**
   * Fetches a single user by ID and Brazilianizes it
   */
  getUserById: async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${API_URL}/users/${id}`);
    const index = (id - 1) % 10;
    const name = brazilianNames[index];
    const city = brazilianCities[index];
    const companyName = brazilianCompanies[index];
    const street = brazilianStreets[index];
    const phone = brazilianPhones[index];
    const email = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '.') + '@exemplo.com.br';
    const website = 'www.' + companyName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com.br';

    return {
      ...response.data,
      name,
      email,
      phone,
      website,
      address: {
        ...response.data.address,
        city,
        street,
        suite: `Apto ${100 + index}`,
        zipcode: `${30000 + index * 1000}-${100 + index}`
      },
      company: {
        ...response.data.company,
        name: companyName
      }
    };
  }
};
