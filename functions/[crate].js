export async function onRequestGet({ params: { crate } }) {
	const response = await fetch(`https://crates.io/api/v1/crates/${crate}`);
	console.info(JSON.stringify(response));
	const { crate: { repository } } = response;

	return new Response(null, {
		status: 302,
		headers: {
			Location: repository,
		},
	});
}
