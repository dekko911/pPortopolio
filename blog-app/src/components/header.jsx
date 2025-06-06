import { Link } from "react-router";

export const Header = ({ to, children }) => {
	return (
		<header className="sticky top-0 z-10 py-3.5 shadow-md/20 bg-white/20 backdrop-blur-lg">
			<div className="container mx-auto flex justify-between items-center px-5">
				<Link
					to={to}
					className="font-semibold font-montserrat text-2xl text-shadow-md flex items-center text-zinc-100 hover:scale-[110%] duration-300 hover:-rotate-[1.5deg]"
				>
					<img
						src="../src/assets/photo/logoM.png"
						alt="Logo"
						className="w-[50px]"
					/>
					<span className="text-pink-500 me-1.5">Miko's</span>
					Blog
				</Link>
				<nav className="flex gap-x-4 text-xl font-montserrat text-shadow-sm text-zinc-300">
					{children}
				</nav>
			</div>
		</header>
	);
};
