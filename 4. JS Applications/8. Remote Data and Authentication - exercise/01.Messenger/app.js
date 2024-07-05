function attachEvents() {
    const ENDPOINT_URL = "http://localhost:3030/jsonstore/messenger";

    const sendBtnRef = document.querySelector("#submit");
    const refreshBtnRef = document.querySelector("#refresh");
    const nameInputRef = document.querySelector('input[name="author"]');
    const messageInputRef = document.querySelector('input[name="content"]');
    const textAreaRef = document.querySelector("#messages");

    sendBtnRef.addEventListener("click", onSubmit);
    refreshBtnRef.addEventListener("click", onRefresh);

    onRefresh();

    async function onRefresh() {
        const response = await fetch(ENDPOINT_URL);
        if (!response.ok) {
            return alert("Failed to fetch messages");
        }
        const responseData = await response.json();
        const messages = Object.values(responseData);
        let result = "";
        for (const message of messages) {
            result += `${message.author}: ${message.content}\n`;
        }

        textAreaRef.value = result.trim();
    }

    async function onSubmit() {
        if (!nameInputRef.value || !messageInputRef.value) {
            return alert("Please provide name and message");
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                author: nameInputRef.value,
                content: messageInputRef.value,
            }),
        };

        const response = await fetch(ENDPOINT_URL, options);
        if (!response.ok) {
            return alert("Error");
        }

        onRefresh();
    }
}

attachEvents();
