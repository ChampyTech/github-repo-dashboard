function handleRepo(event) {
    event.preventDefault();
    generateLinks();
}

async function generateLinks() {
    const username = document.getElementById('username').value.trim();
    const repo = document.getElementById('repo').value.trim();
    const list = document.getElementById('links');
    list.innerHTML = '';

    if (!username || !repo) return list.innerHTML = '<li style="color: red">Please enter a valid username or repository name.</li>';

    document.getElementById('linksHeading').innerHTML = 'Links';

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`
        list.appendChild(li);
    });
}