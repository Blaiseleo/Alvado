window.addEventListener('load', function () {
    document.getElementsByName('locale').forEach((langInput) => {
        langInput.value = navigator.language || navigator.userLanguage;
    });
});
