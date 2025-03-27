document.getElementById("openCamera").addEventListener("click", async function () {
    const constraints = {
        video: { facingMode: "user" }
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.getElementById("cameraView");
    video.srcObject = stream;
});

document.getElementById("fileInput").addEventListener("change", function (event) {
    const files = event.target.files;
    const gallery = document.getElementById("gallery");

    for (let file of files) {
        const fileType = file.type.split("/")[0];
        const url = URL.createObjectURL(file);
        
        let element;
        if (fileType === "image") {
            element = document.createElement("img");
            element.src = url;
        } else if (fileType === "video") {
            element = document.createElement("video");
            element.src = url;
            element.controls = true;
        }

        if (element) {
            gallery.appendChild(element);
        }
    }
});
