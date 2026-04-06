
import { useTheme } from '../../../context/ThemeContext';
import { useState } from 'react';

type DashboardProps = {
	user: {
		nome: string;
		email: string;
		avatar: string;
	};
	onLogout?: () => void;
};

export default function Dashboard({ user, onLogout }: DashboardProps) {
	const { theme, toggleTheme } = useTheme();
	const [sidebarActive, setSidebarActive] = useState('Dashboard');
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const stats = [
		{ label: 'Saldo Total', value: 'R$ 45.230,00', icon: 'ri-wallet-3-fill', color: 'primary', percent: '+12.5%', percentColor: 'text-secondary' },
		{ label: 'Entradas', value: 'R$ 12.450,00', icon: 'ri-arrow-down-circle-fill', color: 'secondary', percent: '+8.2%', percentColor: 'text-secondary' },
		{ label: 'Saídas', value: 'R$ 8.320,00', icon: 'ri-arrow-up-circle-fill', color: 'red-500', percent: '-3.1%', percentColor: 'text-red-500' },
		{ label: 'Investimentos', value: 'R$ 28.900,00', icon: 'ri-pie-chart-2-fill', color: 'primary', percent: '+15.3%', percentColor: 'text-secondary' },
	];
	const actions = [
		{ label: 'Transferir', icon: 'ri-exchange-dollar-line', color: 'primary' },
		{ label: 'Pagar QR', icon: 'ri-qr-code-line', color: 'secondary' },
		{ label: 'Pagar Boleto', icon: 'ri-barcode-box-line', color: 'primary' },
		{ label: 'Recarregar', icon: 'ri-add-circle-line', color: 'secondary' },
	];
	const transactions = [
		{ label: 'Supermercado', date: 'Hoje, 14:30', amount: '-R$ 234,50', icon: 'ri-shopping-bag-3-line', color: 'red-500', bg: 'bg-red-100' },
		{ label: 'Salário', date: 'Ontem, 09:00', amount: '+R$ 5.000,00', icon: 'ri-arrow-down-line', color: 'secondary', bg: 'bg-secondary/10' },
		{ label: 'Internet', date: '22 Jan, 10:15', amount: '-R$ 99,90', icon: 'ri-wifi-line', color: 'primary', bg: 'bg-primary/10' },
		{ label: 'Streaming', date: '20 Jan, 18:45', amount: '-R$ 29,90', icon: 'ri-movie-line', color: 'primary', bg: 'bg-primary/10' },
		{ label: 'Restaurante', date: '18 Jan, 20:00', amount: '-R$ 156,00', icon: 'ri-restaurant-line', color: 'orange-500', bg: 'bg-orange-100' },
	];
	const categorias = [
		{ label: 'Compras', value: 'R$ 1.234', icon: 'ri-shopping-bag-3-line', color: 'red-500', bg: 'bg-red-100' },
		{ label: 'Alimentação', value: 'R$ 890', icon: 'ri-restaurant-line', color: 'secondary', bg: 'bg-secondary/10' },
		{ label: 'Transporte', value: 'R$ 456', icon: 'ri-car-line', color: 'primary', bg: 'bg-primary/10' },
		{ label: 'Moradia', value: 'R$ 2.100', icon: 'ri-home-4-line', color: 'primary', bg: 'bg-primary/10' },
		{ label: 'Lazer', value: 'R$ 567', icon: 'ri-movie-line', color: 'orange-500', bg: 'bg-orange-100' },
	];

	return (
		<div className="bg-bgLight dark:bg-bgDark min-h-screen transition-colors duration-300">
			{/* Botão de tema */}
			{/* Botão de tema fixo no canto inferior direito */}
			<button
				onClick={toggleTheme}
				className={
					`fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 shadow-lg ` +
					(theme === 'dark'
						? 'bg-slate-800 border-indigo-500 hover:bg-indigo-700'
						: 'bg-indigo-100 border-indigo-300 hover:bg-indigo-200')
				}
				aria-label="Alternar tema"
				title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
			>
				<i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line ${theme === 'dark' ? 'text-yellow-300' : 'text-indigo-500'} text-2xl`} />
			</button>
			<div className="flex min-h-screen">


				{/* Botão de menu hamburguer visível apenas em telas pequenas e quando o menu não está aberto */}
				{!sidebarOpen && (
					<button
						className="md:hidden fixed top-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white shadow-lg"
						onClick={() => setSidebarOpen(true)}
						aria-label="Abrir menu"
					>
						<i className="ri-menu-line text-2xl"></i>
					</button>
				)}

				{/* Sidebar mobile overlay */}
				{sidebarOpen && (
					<>
						<div
							className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
							onClick={() => setSidebarOpen(false)}
							aria-label="Fechar menu"
						></div>
						<aside className="sidebar w-64 bg-cardLight dark:bg-cardDark shadow-lg fixed h-full z-50 transition-all duration-300 md:hidden animate-slide-in-left">
							<div className="p-6">
								<div className="flex items-center space-x-3 mb-8">
									<div className="w-10 h-10 gradient-card rounded-lg flex items-center justify-center">
										<i className="ri-bank-line text-white text-xl"></i>
									</div>
									<h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">BancoDigital</h1>
								</div>
								<nav className="space-y-2">
									{['Dashboard', 'Contas', 'Transferências', 'Pagamentos', 'Investimentos', 'Configurações'].map((item) => (
										<button
											key={item}
											className={`sidebar-item flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 w-full text-left ${sidebarActive === item ? 'active' : ''}`}
											onClick={() => {
												setSidebarActive(item);
												setSidebarOpen(false);
											}}
										>
											<i className={
												item === 'Dashboard' ? 'ri-dashboard-line text-lg' :
												item === 'Contas' ? 'ri-wallet-3-line text-lg' :
												item === 'Transferências' ? 'ri-exchange-line text-lg' :
												item === 'Pagamentos' ? 'ri-bill-line text-lg' :
												item === 'Investimentos' ? 'ri-pie-chart-line text-lg' :
												'ri-settings-4-line text-lg'
											}></i>
											<span>{item}</span>
										</button>
									))}
								</nav>
							</div>
							<div className="absolute bottom-0 w-full p-6">
								<div className="glass-effect rounded-xl p-4">
									<div className="flex items-center space-x-3">
										<img src={user.avatar} alt="User" className="w-10 h-10 rounded-full object-cover" />
										<div>
											<p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{user.nome}</p>
											<p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
										</div>
									</div>
								</div>
							</div>
							{/* Botão para fechar o menu */}
							<button
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
								onClick={() => setSidebarOpen(false)}
								aria-label="Fechar menu"
							>
								<i className="ri-close-line text-2xl"></i>
							</button>
						</aside>
					</>
				)}

				{/* Sidebar desktop */}
				<aside className="sidebar w-64 bg-cardLight dark:bg-cardDark shadow-lg fixed h-full z-50 transition-colors duration-300 hidden md:block">
					<div className="p-6">
						<div className="flex items-center space-x-3 mb-8">
							<div className="w-10 h-10 gradient-card rounded-lg flex items-center justify-center">
								<i className="ri-bank-line text-white text-xl"></i>
							</div>
							<h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">BancoDigital</h1>
						</div>
						<nav className="space-y-2">
							{['Dashboard', 'Contas', 'Transferências', 'Pagamentos', 'Investimentos', 'Configurações'].map((item) => (
								<button
									key={item}
									className={`sidebar-item flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 w-full text-left ${sidebarActive === item ? 'active' : ''}`}
									onClick={() => setSidebarActive(item)}
								>
									<i className={
										item === 'Dashboard' ? 'ri-dashboard-line text-lg' :
										item === 'Contas' ? 'ri-wallet-3-line text-lg' :
										item === 'Transferências' ? 'ri-exchange-line text-lg' :
										item === 'Pagamentos' ? 'ri-bill-line text-lg' :
										item === 'Investimentos' ? 'ri-pie-chart-line text-lg' :
										'ri-settings-4-line text-lg'
									}></i>
									<span>{item}</span>
								</button>
							))}
						</nav>
					</div>
					<div className="absolute bottom-0 w-full p-6">
						<div className="glass-effect rounded-xl p-4">
							<div className="flex items-center space-x-3">
								<img src={user.avatar} alt="User" className="w-10 h-10 rounded-full object-cover" />
								<div>
									<p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{user.nome}</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
								</div>
							</div>
						</div>
					</div>
				</aside>
				{/* Main Content */}
				<main className="ml-64 flex-1 p-8 transition-colors duration-300">
					{/* Header */}
					<header className="flex justify-between items-center mb-8">
						<div>
							<h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Bom dia, {user.nome}! 👋</h2>
							<p className="text-gray-500 dark:text-gray-400">Aqui está o resumo da sua conta</p>
						</div>
						<div className="flex items-center space-x-4">
							<button className="w-10 h-10 rounded-full bg-cardLight dark:bg-cardDark shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
								<i className="ri-notification-3-line text-gray-600 dark:text-gray-300"></i>
							</button>
							<button className="w-10 h-10 rounded-full bg-cardLight dark:bg-cardDark shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
								<i className="ri-message-3-line text-gray-600 dark:text-gray-300"></i>
							</button>
							<button className="btn-primary text-white px-6 py-2 rounded-lg font-medium">
								<i className="ri-add-line mr-2"></i>Nova Transação
							</button>
							{onLogout && (
								<button
									onClick={onLogout}
									className="ml-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-all"
									title="Sair da conta"
								>
									<i className="ri-logout-box-r-line mr-1"></i> Sair
								</button>
							)}
						</div>
					</header>
					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						{stats.map((stat, idx) => (
							<div key={stat.label} className="stat-card card bg-cardLight dark:bg-cardDark rounded-2xl p-6 shadow-sm">
								<div className="flex items-center justify-between mb-4">
									<div className={`w-12 h-12 ${stat.color === 'primary' ? 'bg-primary/10' : stat.color === 'secondary' ? 'bg-secondary/10' : 'bg-red-100'} rounded-lg flex items-center justify-center`}>
										<i className={`${stat.icon} ${stat.color === 'primary' ? 'text-primary' : stat.color === 'secondary' ? 'text-secondary' : 'text-red-500'} text-xl`}></i>
									</div>
									<span className={`${stat.percentColor} text-sm font-medium`}>{stat.percent}</span>
								</div>
								<h3 className="text-gray-500 dark:text-gray-400 text-sm mb-1">{stat.label}</h3>
								<p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stat.value}</p>
							</div>
						))}
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Credit Card */}
						<div className="lg:col-span-2">
							<div className="card bg-cardLight dark:bg-cardDark rounded-2xl p-6 shadow-sm mb-8">
								<div className="flex justify-between items-center mb-6">
									<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Meus Cartões</h3>
									<button className="text-primary hover:text-primary/80 text-sm font-medium">Ver Todos</button>
								</div>
								<div className="card-flip cursor-pointer">
									<img src="https://image.qwenlm.ai/public_source/db6f2ca3-629d-4808-b32b-bff5e7b10b0f/126b675a5-75c1-41b8-a547-6027ffeca96d.png" alt="Credit Card" className="w-full h-48 object-cover rounded-xl shadow-lg" />
								</div>
								<div className="mt-4 flex justify-between items-center">
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400">Limite Disponível</p>
										<p className="text-xl font-bold text-gray-800 dark:text-gray-100">R$ 15.000,00</p>
									</div>
									<div className="text-right">
										<p className="text-sm text-gray-500 dark:text-gray-400">Fatura Atual</p>
										<p className="text-xl font-bold text-red-500">R$ 2.340,00</p>
									</div>
								</div>
							</div>
							{/* Quick Actions */}
							<div className="card bg-cardLight dark:bg-cardDark rounded-2xl p-6 shadow-sm mb-8">
								<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">Ações Rápidas</h3>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									{actions.map((action) => (
										<button key={action.label} className={`action-btn flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all group`}>
											<div className={`w-12 h-12 ${action.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} rounded-full flex items-center justify-center mb-2 group-hover:${action.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'} transition-all`}>
												<i className={`${action.icon} ${action.color === 'primary' ? 'text-primary' : 'text-secondary'} text-xl`}></i>
											</div>
											<span className="text-sm font-medium text-gray-700 dark:text-gray-200">{action.label}</span>
										</button>
									))}
								</div>
							</div>
						</div>
						{/* Recent Transactions */}
						<div className="lg:col-span-1">
							<div className="card bg-cardLight dark:bg-cardDark rounded-2xl p-6 shadow-sm">
								<div className="flex justify-between items-center mb-6">
									<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Transações Recentes</h3>
									<button className="text-primary hover:text-primary/80 text-sm font-medium">Ver Todas</button>
								</div>
								<div className="space-y-4">
									{transactions.map((tx) => (
										<div key={tx.label + tx.date} className="transaction-item flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
											<div className="flex items-center space-x-3">
												<div className={`w-10 h-10 ${tx.bg} rounded-full flex items-center justify-center`}>
													<i className={`${tx.icon} text-${tx.color}`}></i>
												</div>
												<div>
													<p className="text-sm font-medium text-gray-800 dark:text-gray-100">{tx.label}</p>
													<p className="text-xs text-gray-500 dark:text-gray-400">{tx.date}</p>
												</div>
											</div>
											<span className={`text-sm font-semibold ${tx.amount.startsWith('+') ? 'text-secondary' : 'text-red-500'}`}>{tx.amount}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Spending Chart Section */}
					<div className="mt-8 card bg-cardLight dark:bg-cardDark rounded-2xl p-6 shadow-sm">
						<div className="flex justify-between items-center mb-6">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Gastos por Categoria</h3>
							<select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-cardLight dark:bg-cardDark text-gray-800 dark:text-gray-100">
								<option>Este Mês</option>
								<option>Mês Passado</option>
								<option>Últimos 3 Meses</option>
							</select>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							{categorias.map((cat) => (
								<div key={cat.label} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
									<div className={`w-12 h-12 ${cat.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
										<i className={`${cat.icon} text-${cat.color} text-xl`}></i>
									</div>
									<p className="text-sm text-gray-600 dark:text-gray-300">{cat.label}</p>
									<p className="text-lg font-bold text-gray-800 dark:text-gray-100">{cat.value}</p>
								</div>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
