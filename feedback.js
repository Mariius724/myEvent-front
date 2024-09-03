document.querySelectorAll('.stars-rating input').forEach(input => {
    input.addEventListener('change', () => {
        alert(`Thanks for rating us ${input.value} star(s).`);
    });
});