document.getElementById('command-form').onsubmit = async (event) =>{
    event.preventDefault()

    const data = await fetch("/command", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            command: event.target["select"].value,
            text: event.target["text"].value,
            password: document.getElementById("password").value
        })
    })

    event.target["select"].value = ""
    event.target["text"].value = ""

    const json = await data.json().catch((err) => console.log(err));
    document.getElementById("message").innerText = json.message
    return true;
}