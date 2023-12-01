import Jokes from "@/components/Jokes";

const Home = () => {
	return (
		<section className="w-full flex-col flex-center">
			<h1 className="head_text text-center">
				Discover & Share
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">Dad Jokes</span>
			</h1>
			<p className="desc text-center">
				Yo-Dad! is a place to relax with intense and stunning jokes from your Dad.
				Feel at home and laugh at your own risk!
			</p>
			<Jokes />
		</section>
	);
};

export default Home;
