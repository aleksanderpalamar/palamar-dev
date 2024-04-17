import { getStore } from "@/app/_service/store";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // 60 seconds
export const dynamic = "force-dynamic";

const SetupPage = async () => {
	const products = await getStore();

	return (
		<div className="flex flex-col w-full min-h-screen p-4">
			<div className="max-w-6xl self-center w-full flex-1">
				<h1 className="text-3xl font-bold text-white flex items-start flex-col gap-2">
					Setup
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
					{products.map((product) => (
						<div
							key={product.id}
							className="w-[258px] h-[160px] bg-base-100 dark:bg-zinc-800 shadow-xl hover:shadow-2xl 
              dark:shadow-2xl hover:scale-105 transition duration-500 rounded-xl overflow-hidden
              flex flex-col relative"
						>
							<Image
								src={product.image}
								width={1000}
								height={1000}
								alt=""
								className="w-full h-full object-cover opacity-30"
							/>
							<div className="absolute top-0 w-full h-full flex flex-col justify-around p-2">
								<div className="flex items-start justify-between w-full gap-x-2">
									<span className="text-white text-sm"></span>
									<p className="text-2xl font-bold text-white">
										{/*<span>{product.price}</span>*/}
									</p>
									<div className="text-xs font-bold text-white">
										{product.name}
									</div>
									<div className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all text-xs rounded-xl p-1">
										{product.tags}
									</div>
								</div>
								<div className="p-2 flex text-zinc-950 w-1/2 gap-x-2">
									<Link
										href={product.href}
										target="_blank"
										className="bg-zinc-50 p-2 rounded flex items-center text-zinc-950 hover:bg-zinc-300"
									>
										Buy
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SetupPage;
