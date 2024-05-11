        function entre() {
            var answers = [
                {
                    text: "Yes.",
                    color: "#43528E",
                },
                {
                    text: "Yes!",
                    color: "#7D416A"
                },
                {
                    text: "Most Likely.",
                    color: "#65333B"
                },
                {
                    text: "Somewhat...",
                    color: "#5A4D58"
                },
                {
                    text: "Potentially.",
                    color: "#2D5846"
                },
                {
                    text: "50/50 Chance.",
                    color: "#5D8A44"
                },
                {
                    text: "Highly unlikely...",
                    color: "#64AD54"
                },
                {
                    text: "Immensely improbable.",
                    color: "#5E736B"
                },
                {
                    text: "Nope. Not happening. Not even a chance.",
                    color: "#3D323A"
                },
                {
                    text: "There's a higher chance of you learning to fly.",
                    color: "#24181F"
                }
            ];

            const randomIndex = Math.floor(Math.random() * answers.length);
            const chosenAnswer = answers[randomIndex];

            document.getElementById("message").innerHTML = chosenAnswer.text;
            document.body.style.backgroundColor = chosenAnswer.color;

        }
