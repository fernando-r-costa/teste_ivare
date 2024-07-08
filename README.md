# Controle de Pedidos

Este projeto é um painel para controle de pedidos, desenvolvido com React, Next.js, Tailwind CSS e Node.js.

## Descrição

O projeto consiste em uma aplicação web que permite o gerenciamento de pedidos, com funcionalidades para adicionar novos pedidos, mover pedidos ativos para finalizados, e exibir listas de pedidos ativos e finalizados.

## Funcionalidades

- Adicionar novos pedidos com descrição e endereço.
- Calcular automaticamente o tempo estimado de entrega baseado em geocodificação e roteamento.
- Mover pedidos da lista de ativos para finalizados.
- Exibir listas separadas para pedidos ativos e finalizados.
- Interface responsiva utilizando Tailwind CSS para estilos.

## Como Funciona

1. **Adicionar Novos Pedidos:**
   - Clique no botão "Novo Pedido".
   - Preencha a descrição e o endereço do pedido.
   - Confirme para adicionar o pedido à lista de ativos.

2. **Mover Pedidos para Finalizados:**
   - Na lista de pedidos ativos, clique no botão "OK" ao lado do pedido concluído.
   - O pedido será transferido para a lista de pedidos finalizados, exibindo o horário de conclusão.

3. **Visualização de Pedidos:**
   - Os pedidos são exibidos em listas separadas para ativos e finalizados.
   - A lista de pedidos ativos mostra o tempo restante até a entrega estimada.

## Instalação e Uso

### Pré-requisitos

- Node.js (versão X.X.X ou superior)
- npm (ou yarn)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto

2. Instale as dependências:

   ```bash
   npm install
   # ou, se estiver usando yarn
   yarn install

### Uso

1. Para iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou, com yarn
   yarn dev

2. Acesse a aplicação em <http://localhost:3000>.

### Autor

#### Fernando R Costa - [LinkedIn](https://www.linkedin.com/in/fernando-r-costa/)

<img src="./public/frc.gif" width=120px alt="">
