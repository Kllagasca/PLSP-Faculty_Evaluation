document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('evaluation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather evaluation data
        const evaluationData = {
            facultyName: document.querySelector('#faculty-section h2').textContent,
            q1: getSelectedRating('q1'),
            q2: getSelectedRating('q2'),
            q3: getSelectedRating('q3'),
            q4: getSelectedRating('q4'),
            q5: getSelectedRating('q5'),
            q6: getSelectedRating('q6')
        };

        // Do something with the evaluation data, like send it to a server or display it
        console.log('Evaluation Data:', evaluationData);
        alert('Evaluation submitted successfully!');
    });

    function getSelectedRating(question) {
        const selectedRating = document.querySelector(`input[name="${question}"]:checked`);
        return selectedRating ? selectedRating.value : null;
    }
});