async function generateImage() {
    const prompt = document.getElementById("prompt").value;

    if (!prompt) {
        alert("Please enter a prompt");
        return;
    }

    const image = document.getElementById("result");
    image.src = "https://placehold.co/512x512?text=Generating...";

    const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt);

    image.src = url;
}
