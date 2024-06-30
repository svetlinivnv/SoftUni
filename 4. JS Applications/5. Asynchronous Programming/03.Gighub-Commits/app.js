function loadCommits() {
    const usernameInputEl = document.getElementById('username');
    const repoInputEl = document.getElementById('repo');

	const commitsListEl = document.getElementById('commits');

	const username = usernameInputEl.value;
    const repository = repoInputEl.value;

	const url = `https://api.github.com/repos/${username}/${repository}/commits`;

	commitsListEl.innerHTML = '';

	fetch(url)
	.then(response => {
		if(!response.ok) {
			throw new Error('Not Found');
		}
		return response.json();
	})
	.then(commits => {
        console.log(commits);
		commits.forEach(commit => {
            console.log(commit);
            const author = commit.author ? commit.author.login : 'Unknown Author';
			commitsListEl.innerHTML += `
				<li>${author}: ${commit.commit.message}</li>
			`			
		});
	})
	.catch(error => {
		commitsListEl.innerHTML = `
			<li>${error.message}</li>
		`
	})
}