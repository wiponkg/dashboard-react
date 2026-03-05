# Dashboard de Gestão de Usuários

Um dashboard profissional e moderno para gerenciamento de usuários, desenvolvido com as tecnologias mais atuais do ecossistema React. Este projeto foi construído com foco em performance, escalabilidade e uma experiência de usuário (UX) refinada, apresentando dados "abrasileirados" para um contexto local.

## Tecnologias Utilizadas

- **React 19** - Biblioteca principal para construção da interface.
- **TypeScript** - Tipagem estática para maior segurança e produtividade.
- **Chakra UI v3** - Sistema de design para componentes de interface modernos e acessíveis.
- **PrimeReact** - Biblioteca de componentes ricos, utilizada especialmente para a `DataTable` avançada.
- **PrimeFlex** - Utilitários CSS para layout responsivo.
- **Axios** - Cliente HTTP para consumo da API REST.
- **React Router Dom** - Gerenciamento de rotas e navegação.
- **Framer Motion** - Animações fluidas e transições de página.
- **Lucide React** - Conjunto de ícones leves e consistentes.

## Funcionalidades

- **Painel Principal**: Listagem de usuários em uma tabela interativa.
- **Busca em Tempo Real**: Filtro global para encontrar usuários por qualquer campo.
- **Ordenação Avançada**: Organize a tabela por nome, e-mail, empresa ou cidade.
- **Página de Detalhes**: Visualização completa das informações de um usuário, incluindo contato, detalhes profissionais e localização.
- **Dados Localizados**: Transformação de dados da API original para nomes, cidades, telefones e endereços no padrão brasileiro.
- **Design Responsivo**: Interface adaptável para dispositivos móveis, tablets e desktops.
- **Estado Global**: Gerenciamento de estado utilizando Context API para evitar prop drilling.

## Estrutura do Projeto

```text
src/
├── components/     # Componentes reutilizáveis (Navbar, UserTable)
├── context/        # Gerenciamento de estado global (UserContext)
├── pages/          # Páginas da aplicação (Dashboard, UserDetail)
├── services/       # Lógica de API e serviços (Axios)
├── types/          # Definições de tipos TypeScript
├── App.tsx         # Configuração de rotas e layout base
└── main.tsx        # Ponto de entrada e provedores de contexto
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/dashboard-gestao-usuarios.git
   cd dashboard-gestao-usuarios
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   O projeto estará disponível em `http://localhost:3000`.
---
Desenvolvido com ❤️ por William José
