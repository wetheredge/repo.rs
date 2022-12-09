export async function onRequestGet({ params: { crate } }) {
	const url = `https://crates.io/api/v1/crates/${crate}`;
	console.debug(`fetching '${url}'`);
	const response = await fetch(url, {
		headers: {
			'User-Agent': 'repo.rs',
		},
	});

	console.debug(`got status ${response.status} (${response.statusText})`);

	const body = await response.json();
	const repository = body?.crate?.repository;
	console.debug(`redirecting to '${repository}'`);

	return new Response(null, {
		status: 302,
		headers: {
			Location: repository,
		},
	});
}
