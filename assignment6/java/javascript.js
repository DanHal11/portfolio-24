        var backgroundMusic = document.getElementById("background-music");

        function toggleBackgroundMusic() {
            var toggleButton = document.getElementById('toggleButton');
            if (window.innerWidth < 600) {
                if (backgroundMusic.paused) {
                    backgroundMusic.play();
                    toggleButton.textContent = "Playing";
                } else {
                    backgroundMusic.pause();
                    toggleButton.textContent = "Paused";
                }
            } else if (window.innerWidth > 600) {

                if (backgroundMusic.paused) {
                    backgroundMusic.play();
                    toggleButton.textContent = "Music is Playing";
                } else {
                    backgroundMusic.pause();
                    toggleButton.textContent = "Music is Paused";
                }
            }
        }









        var returnButton = document.getElementById('returnButton');

        // dun work yet
        updateButtonText();
        window.addEventListener('resize', updateButtonText);

        function returnButton() {
            if (window.innerWidth < 600) {
                returnButton.textContent = 'INDEX';
            } else {
                returnButton.textContent = 'Return to INDEX';
            }
        }
