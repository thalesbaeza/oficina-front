import React from 'react';
import DataTable from '../components/ui/DataTable';
// Dados mockados para exemplo
const mockSuppliers = [{
  id: 1,
  supplier_name: 'Auto Peças Genuínas Ltda.',
  supplier_contact: '(11) 3333-4444',
  supplier_address: 'Av. Industrial, 1500'
}, {
  id: 2,
  supplier_name: 'Distribuidora de Peças ABC',
  supplier_contact: '(21) 2222-3333',
  supplier_address: 'Rua do Comércio, 500'
}, {
  id: 3,
  supplier_name: 'Importadora de Autopeças XYZ',
  supplier_contact: 'contato@xyzauto.com.br',
  supplier_address: 'Rod. Anhanguera, Km 110'
}];
const columns = [{
  header: 'Nome',
  accessor: 'supplier_name'
}, {
  header: 'Contato',
  accessor: 'supplier_contact'
}, {
  header: 'Endereço',
  accessor: 'supplier_address'
}];
const Suppliers = () => {
  const handleAddSupplier = () => {
    console.log('Add supplier');
    // Implementar lógica para adicionar fornecedor
  };
  const handleEditSupplier = (id: number) => {
    console.log('Edit supplier', id);
    // Implementar lógica para editar fornecedor
  };
  const handleDeleteSupplier = (id: number) => {
    console.log('Delete supplier', id);
    // Implementar lógica para deletar fornecedor
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Gerenciar Fornecedores
      </h1>
      <DataTable title="Fornecedores" columns={columns} data={mockSuppliers} onAdd={handleAddSupplier} onEdit={handleEditSupplier} onDelete={handleDeleteSupplier} />
    </div>;
};
export default Suppliers;