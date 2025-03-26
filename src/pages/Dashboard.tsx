import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CarIcon, UsersIcon, ShoppingCartIcon, PackageIcon, TrendingUpIcon } from 'lucide-react';
// Dados mockados para exemplo
const transactionData = [{
  name: 'Jan',
  value: 4000
}, {
  name: 'Fev',
  value: 3000
}, {
  name: 'Mar',
  value: 5000
}, {
  name: 'Abr',
  value: 2780
}, {
  name: 'Mai',
  value: 1890
}, {
  name: 'Jun',
  value: 2390
}];
const Dashboard = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total de Carros" value="24" icon={<CarIcon className="h-6 w-6 text-blue-600" />} trend="+5% desde o último mês" />
        <StatCard title="Total de Clientes" value="156" icon={<UsersIcon className="h-6 w-6 text-green-600" />} trend="+12% desde o último mês" />
        <StatCard title="Transações" value="1,234" icon={<ShoppingCartIcon className="h-6 w-6 text-purple-600" />} trend="+8% desde o último mês" />
        <StatCard title="Peças em Estoque" value="532" icon={<PackageIcon className="h-6 w-6 text-orange-600" />} trend="-3% desde o último mês" />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Transações Mensais
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Relatório de Atividades Recentes
          </h2>
          <div className="space-y-4">
            <ActivityItem title="Nova transação de compra" description="Cliente: João Silva, Carro: Fiat Uno 2019" time="Há 2 horas" />
            <ActivityItem title="Estoque atualizado" description="20 novas peças adicionadas ao estoque" time="Há 5 horas" />
            <ActivityItem title="Nova venda registrada" description="Cliente: Maria Oliveira, Carro: Volkswagen Golf 2020" time="Há 1 dia" />
            <ActivityItem title="Fornecedor adicionado" description="Auto Peças Genuínas Ltda." time="Há 2 dias" />
          </div>
        </div>
      </div>
    </div>;
};
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend
}) => {
  const isTrendPositive = trend.includes('+');
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-full">{icon}</div>
      </div>
      <div className="flex items-center mt-4">
        <TrendingUpIcon className={`h-4 w-4 ${isTrendPositive ? 'text-green-500' : 'text-red-500'}`} />
        <span className={`text-xs ml-1 ${isTrendPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
    </div>;
};
interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}
const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  description,
  time
}) => {
  return <div className="flex items-start">
      <div className="h-2 w-2 mt-2 rounded-full bg-blue-600"></div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>;
};
export default Dashboard;