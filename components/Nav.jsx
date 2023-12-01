"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
	const isLoggedIn = true;
	const [providers, setProviders] = useState(null);
	const [mobileMenu, setMobileMenu] = useState(false);
	useEffect(() => {
		const setProvider = async () => {
			const response = getProviders();
			setProviders(response);
		};
		setProvider();
	}, []);
	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src="/assets/images/logo.svg"
					alt="dad-jokes logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="logo_text">Hey-Dad!</p>
			</Link>

			{/* Desktop Navigation Section */}
			<div className="sm:flex hidden">
				{isLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/create-joke" className="black_btn">
							Create Joke
						</Link>
						<button type="button" className="outline_btn" onClick={signOut}>
							Sign out
						</button>
						<Link href="/profile">
							<Image
								src="/assets/images/logo.svg"
								alt="dad-jokes logo"
								width={37}
								height={37}
								className="rounded-full"
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									key={provider.name}
									type="button"
									onClick={() => signIn(provider.id)}
									className="black_btn"
								>
									Sign In
								</button>
							))}
					</>
				)}
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{isLoggedIn ? (
					<div className="flex">
						<Image
							src="/assets/images/logo.svg"
							alt="dad-jokes logo"
							width={37}
							height={37}
							className="rounded-full"
							onClick={() => {
								setMobileMenu((prev) => !prev);
							}}
						/>
						{mobileMenu && (
							<div className="dropdown">
								<Link 
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setMobileMenu(false)}
                                >
                                    My Profile
                                </Link>
								<Link 
                                    href="/create-jokes"
                                    className="dropdown_link"
                                    onClick={() => setMobileMenu(false)}
                                >
                                    Create joke
                                </Link>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									key={provider.name}
									type="button"
									onClick={() => signIn(provider.id)}
									className="black_btn"
								>
									Sign In
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
