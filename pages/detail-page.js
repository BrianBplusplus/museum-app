function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;

    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;

    comment.classList.add('message');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log('comment = ', comment);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea.value = null;
    };