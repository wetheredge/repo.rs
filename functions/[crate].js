export async function onRequestGet({ params: { crate } }) {
	const url = `https://crates.io/api/v1/crates/${crate}`;
	console.debug(`fetching '${url}'`);
	const response = await fetch(url).then(resp => resp.json());
	const repository = response?.crate?.repository;
	console.debug(`redirecting to '${repository}'`);

	return new Response(null, {
		status: 302,
		headers: {
			Location: repository,
		},
	});
}
