import React from 'react';
import DataTable from '../components/ui/DataTable';
// Dados mockados para exemplo
const mockCars = [{
  id: 1,
  car_model_name: 'Fiat Uno',
  car_brand: 'Fiat',
  car_year: 2019
}, {
  id: 2,
  car_model_name: 'Volkswagen Golf',
  car_brand: 'Volkswagen',
  car_year: 2020
}, {
  id: 3,
  car_model_name: 'Ford Focus',
  car_brand: 'Ford',
  car_year: 2018
}, {
  id: 4,
  car_model_name: 'Chevrolet Onix',
  car_brand: 'Chevrolet',
  car_year: 2021
}, {
  id: 5,
  car_model_name: 'Toyota Corolla',
  car_brand: 'Toyota',
  car_year: 2020
}];
const columns = [{
  header: 'Modelo',
  accessor: 'car_model_name'
}, {
  header: 'Marca',
  accessor: 'car_brand'
}, {
  header: 'Ano',
  accessor: 'car_year'
}];
const Cars = () => {
  const handleAddCar = () => {
    console.log('Add car');
    // Implementar lógica para adicionar carro
  };
  const handleEditCar = (id: number) => {
    console.log('Edit car', id);
    // Implementar lógica para editar carro
  };
  const handleDeleteCar = (id: number) => {
    console.log('Delete car', id);
    // Implementar lógica para deletar carro
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Gerenciar Modelos de Carros
      </h1>
      <DataTable title="Modelos de Carros" columns={columns} data={mockCars} onAdd={handleAddCar} onEdit={handleEditCar} onDelete={handleDeleteCar} />
    </div>;
};
export default Cars;