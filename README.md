# **Oficina Manager**

**Descrição**

O **Oficina Manager** é um painel de controle moderno e responsivo para gestão de oficinas mecânicas, construído com Vue.js, Vite e TailwindCSS. Ele oferece uma experiência rica para administração de clientes, veículos, transações, fornecedores, peças e controle de estoque.

---

**Recursos**

- **Dashboard Interativo**: Visualização de estatísticas, cards e gráficos com resumo mensal de atividades.
- **Gestão de Carros**: Visualização, edição e exclusão de modelos e marcas de veículos.
- **Clientes**: Listagem e gerenciamento de informações completas dos clientes.
- **Transações**: Controle de vendas e compras com detalhes por cliente e veículo.
- **Peças**: Cadastro e administração das peças utilizadas e vendidas.
- **Fornecedores**: Cadastro de parceiros e distribuidores.
- **Estoque**: Visualização do status de itens (normal, baixo, crítico), com relatórios em cards.
- **Design Responsivo**: Interface adaptável para dispositivos móveis e desktop.
- **Componentes reutilizáveis**: Como `DataTable`, `Header`, `Sidebar`, e `MainLayout`.

---

**Tecnologias**

- Vue 3 + TypeScript
- Vite
- Tailwind CSS
- Lucide Icons (Vue)
- Vue Router
- Vue Chart.js

---

## **Instalação**

### **1. Clonar o repositório**

```bash
git clone https://github.com/thalesbaeza/oficina-front.git
```

### **2. Acessar o diretório**

```bash
cd oficina-front
```

### **3. Instalar dependências**

```bash
yarn
```

ou

```bash
npm install
```

### **4. Executar localmente**

```bash
yarn dev
```

ou

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para visualizar o projeto em execução.

---

## **Estrutura do Projeto**

```bash
oficina-front/
├── public/                         # Arquivos públicos
├── src/
│   ├── assets/                     # CSS global (Tailwind)
│   ├── components/
│   │   ├── layout/                 # Header.vue, Sidebar.vue, MainLayout.vue
│   │   └── ui/                     # Componentes genéricos como DataTable.vue
│   ├── views/                      # Páginas: Dashboard, Cars, Customers, etc.
│   ├── router/                     # Configurações das rotas
│   ├── App.vue                     # Componente principal
│   └── main.ts                     # Entrada principal
├── vite.config.ts                  # Configuração do Vite + aliases
├── tailwind.config.js             # Configuração do TailwindCSS
├── postcss.config.js              # Configuração para Tailwind + PostCSS
├── tsconfig.json                  # Configuração TypeScript
└── README.md                      # Este arquivo
```

---

## **Observações**

- O projeto utiliza **rotas aninhadas** com `MainLayout.vue` como componente layout base.
- Os dados são **mockados** por enquanto, mas prontos para integração com uma API no futuro.
- Os componentes são modulares e prontos para reuso e manutenção.
