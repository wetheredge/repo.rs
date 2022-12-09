export async function onRequestGet({ params: { crate } }) {
	const { crate: { repository } } = await fetch(`https://crates.io/api/v1/crates/${crate}`);

	return new Response(null, {
		status: 302,
		headers: {
			Location: repository,
		},
	});
}
