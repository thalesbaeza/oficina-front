import React from 'react';
import DataTable from '../components/ui/DataTable';
// Dados mockados para exemplo
const mockInventory = [{
  id: 1,
  part_name: 'Filtro de Óleo',
  quantity: 45,
  last_transaction: '2023-05-15',
  stock_balance: 'Normal'
}, {
  id: 2,
  part_name: 'Pastilha de Freio',
  quantity: 12,
  last_transaction: '2023-05-10',
  stock_balance: 'Baixo'
}, {
  id: 3,
  part_name: 'Bateria 60Ah',
  quantity: 8,
  last_transaction: '2023-05-05',
  stock_balance: 'Normal'
}, {
  id: 4,
  part_name: 'Óleo Motor 5W30',
  quantity: 3,
  last_transaction: '2023-05-01',
  stock_balance: 'Crítico'
}];
const columns = [{
  header: 'Peça',
  accessor: 'part_name'
}, {
  header: 'Quantidade',
  accessor: 'quantity'
}, {
  header: 'Última Transação',
  accessor: 'last_transaction'
}, {
  header: 'Status',
  accessor: 'stock_balance'
}];
const Inventory = () => {
  const handleAddInventory = () => {
    console.log('Add inventory');
    // Implementar lógica para adicionar item ao estoque
  };
  const handleEditInventory = (id: number) => {
    console.log('Edit inventory', id);
    // Implementar lógica para editar item do estoque
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Gerenciar Estoque</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total de Itens</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">68</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Itens com Estoque Baixo
          </h3>
          <p className="text-2xl font-bold text-yellow-600 mt-1">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Itens em Estado Crítico
          </h3>
          <p className="text-2xl font-bold text-red-600 mt-1">3</p>
        </div>
      </div>
      <DataTable title="Estoque de Peças" columns={columns} data={mockInventory} onAdd={handleAddInventory} onEdit={handleEditInventory} />
    </div>;
};
export default Inventory;