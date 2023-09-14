import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
	return (
		<nav className="bg-opacity-25 backdrop-blur-md border-b p-4 flex items-center justify-between">
			<div className="ml-4 text-white font-bold">Smart-Agri</div>
			<ul className="flex space-x-4">
				<li>
					<Link href="/about" className="text-white hover:opacity-75">
						Home
					</Link>
				</li>
				<li>
					<Link href="/status" className="text-white hover:opacity-75">
						Status
					</Link>
				</li>
			</ul>
		</nav>
	);
}
