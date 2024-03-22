document.addEventListener('DOMContentLoaded', function() {
    const evaluatedText = document.getElementById('evaluatedText');
    const letterCount = document.getElementById('letterCount');

    evaluatedText.addEventListener('input', function() {
        letterCount.textContent = evaluatedText.value.length;
    });
});
