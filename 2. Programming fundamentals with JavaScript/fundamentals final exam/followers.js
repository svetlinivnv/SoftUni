function followers(input) {

	let followersObj = {};

    input.forEach(line => {        
		let [action, ...tokens] = line.split(": ");
		let user = tokens.shift();
		switch (action) {
			case "New follower":
				if (!followersObj.hasOwnProperty(user)) {
					followersObj[user] = {
						likes: 0,
						comments: 0,
					};
				}
				break;
			case "Like":
				let likes = Number(tokens.shift());
				if (!followersObj.hasOwnProperty(user)) {
					followersObj[user] = {
						likes: likes,
						comments: 0,
					};
				} else followersObj[user].likes += likes;
				break;
			case "Comment":
				if (!followersObj.hasOwnProperty(user)) {
					followersObj[user] = {
						likes: 0,
						comments: 1,
					};
				} else followersObj[user].comments += 1;
				break;
			case "Blocked":
				if (!followersObj.hasOwnProperty(user)) {
					console.log(`${user} doesn't exist.`);
				} else delete followersObj[user];
				break;
		}
    });

	console.log(`${Object.entries(followersObj).length} followers`);

	for (let user in followersObj) {
		console.log(`${user}: ${followersObj[user].likes + followersObj[user].comments}`);
	}
}

followers([
	"New follower: George",
	"Like: George: 5",
	"New follower: George",
	"Log out",
]);
// followers(["Like: Katy: 3",
// "Comment: Katy",
// "New follower: Bob",
// "Blocked: Bob",
// "New follower: Amy",
// "Like: Amy: 4",
// "Log out"])
// followers(["Blocked: Amy",
// "Comment: Amy",
// "New follower: Amy",
// "Like: Tom: 5",
// "Like: Ellie: 5",
// "Log out"])