function loadRepos() {
	const usernameInputEl = document.getElementById('username');
	const reposListEl = document.getElementById('repos');

	const username = usernameInputEl.value;
	const url = `https://api.github.com/users/${username}/repos`;

	reposListEl.innerHTML = '';

	fetch(url)
	.then(response => {
		if(!response.ok) {
			throw new Error('Not Found');
		}
		return response.json();
	})
	.then(repos => {
		repos.forEach(repo => {
			reposListEl.innerHTML += `
				<li>
					<a href="${repo.html_url}">${repo.full_name}</a>
				</li>
			`			
		});
	})
	.catch(error => {
		reposListEl.innerHTML = `
			<li>${error.message}</li>
		`
	})
}