function createStars(container) {
    for (let i = 5; i >= 1; i--) {
        const span = document.createElement('span');
        span.textContent = '★';
        span.dataset.value = i;
        container.appendChild(span);
    }
}

document.querySelectorAll('.stars').forEach(container => {
    createStars(container);

    container.addEventListener('click', e => {
        if (e.target.tagName !== 'SPAN') return;
        const value = e.target.dataset.value;
        container.dataset.rating = value;
        [...container.children].forEach(star => {
            star.classList.toggle('selected', star.dataset.value <= value);
        });
    });
});

const form = document.getElementById('evaluationForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const result = {};
    document.querySelectorAll('.stars').forEach(container => {
        result[container.dataset.name] = container.dataset.rating || 0;
    });
    result.comment = document.getElementById('comment').value;
    console.log(result); // ここで送信する処理に置き換え
    form.reset();
    document.querySelectorAll('.stars').forEach(container => {
        container.dataset.rating = '';
        [...container.children].forEach(star => star.classList.remove('selected'));
    });
    document.getElementById('message').textContent = '送信しました！';
});
