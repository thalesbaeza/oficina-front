import React from 'react';
import DataTable from '../components/ui/DataTable';
// Dados mockados para exemplo
const mockCustomers = [{
  id: 1,
  customer_name: 'João Silva',
  customer_phone: '(11) 98765-4321',
  customer_email: 'joao.silva@email.com',
  customer_address: 'Rua das Flores, 123'
}, {
  id: 2,
  customer_name: 'Maria Oliveira',
  customer_phone: '(11) 91234-5678',
  customer_email: 'maria.oliveira@email.com',
  customer_address: 'Av. Paulista, 1000'
}, {
  id: 3,
  customer_name: 'Pedro Santos',
  customer_phone: '(21) 99876-5432',
  customer_email: 'pedro.santos@email.com',
  customer_address: 'Rua do Comércio, 45'
}];
const columns = [{
  header: 'Nome',
  accessor: 'customer_name'
}, {
  header: 'Telefone',
  accessor: 'customer_phone'
}, {
  header: 'Email',
  accessor: 'customer_email'
}, {
  header: 'Endereço',
  accessor: 'customer_address'
}];
const Customers = () => {
  const handleAddCustomer = () => {
    console.log('Add customer');
    // Implementar lógica para adicionar cliente
  };
  const handleEditCustomer = (id: number) => {
    console.log('Edit customer', id);
    // Implementar lógica para editar cliente
  };
  const handleDeleteCustomer = (id: number) => {
    console.log('Delete customer', id);
    // Implementar lógica para deletar cliente
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Gerenciar Clientes</h1>
      <DataTable title="Clientes" columns={columns} data={mockCustomers} onAdd={handleAddCustomer} onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
    </div>;
};
export default Customers;