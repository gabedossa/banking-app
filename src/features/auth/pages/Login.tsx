import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useAuthStore } from '@/features/auth/store/auth-store'
import { useNavigate } from "react-router-dom";

export default function Login() {
	const { toggleTheme, theme } = useTheme();
	const navigate = useNavigate();
	const loginStore = useAuthStore();

	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			if (email === "testerson@teste.com" && password === "123") {
				loginStore.login(email);
				setLoading(false);
				navigate("/dashboard");
			} else {
				setLoading(false);
				alert("Login invalido! Tente novamente.");
			}
		}, 1500);
	}

	return (
		<div className="min-h-screen flex bg-slate-100 dark:bg-slate-950 transition">

			{/* BOTÃO TEMA */}
			<button
				onClick={toggleTheme}
				className="fixed top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white z-50"
			>
				{theme === "dark" ? "☀️" : "🌙"}
			</button>

			{/* LEFT */}
			<div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-green-500 text-white px-8">
				<div className="text-center max-w-md">
					<h1 className="text-3xl xl:text-5xl font-bold mb-4">
						BancoDigital
					</h1>
					<p className="text-base xl:text-xl opacity-80">
						Sua jornada financeira começa aqui
					</p>
				</div>
			</div>

			{/* RIGHT */}
			<div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8">

				<div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 transition">

					{/* MOBILE LOGO */}
					<div className="lg:hidden text-center mb-6">
						<h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
							BancoDigital
						</h1>
					</div>

					{/* HEADER */}
					<div className="text-center mb-6 sm:mb-8">
						<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
							Bem-vindo de volta!
						</h2>
						<p className="text-sm sm:text-base text-slate-500">
							Entre com suas credenciais
						</p>
					</div>

					{/* FORM */}
					<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

						{/* EMAIL */}
						<div>
							<label className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
								E-mail
							</label>
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full mt-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm sm:text-base"
								placeholder="seu@email.com"
							/>
						</div>

						{/* SENHA */}
						<div>
							<label className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
								Senha
							</label>

							<div className="relative mt-2">
								<input
									type={showPassword ? "text" : "password"}
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm sm:text-base"
									placeholder="********"
								/>

								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
								>
									{showPassword ? "🙈" : "👁"}
								</button>
							</div>
						</div>

						{/* EXTRA */}
						<div className="flex items-center justify-between text-xs sm:text-sm">
							<label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
								<input type="checkbox" />
								Lembrar
							</label>

							<button type="button" className="text-indigo-500 hover:underline">
								Esqueceu?
							</button>
						</div>

						{/* BOTÃO */}
						<button
							type="submit"
							className="w-full bg-indigo-500 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:opacity-90 transition"
						>
							{loading ? "Entrando..." : "Entrar"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
