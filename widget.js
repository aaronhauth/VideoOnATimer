window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj.detail.fieldData;
    someVariable = fieldData["someText"];
    const timerInterval = fieldData.timeInterval || 0;
    const media = document.querySelector('video');

    if (fieldData.addFade === "yes") {
        media.classList.add("fade");
    }
    media.play();

    media.onended = () => {
        media.classList.add("hide")
    }

    setInterval(() => {
        media.classList.remove("hide");
        media.play();
        if (fieldData.videoPlayTime && media.duration < fieldData.videoPlayTime * 1000) {
            setTimeout(() => {
                media.classList.add("hide");
            }, fieldData.videoPlayTime * 1000)
        }
    }, timerInterval * 60 * 1000);
});
