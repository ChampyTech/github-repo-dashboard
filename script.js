function handleRepo(event) {
    event.preventDefault();
    generateLinks();
}

function generateLinks() {
    const username = document.getElementById('username').value.trim();
    const repo = document.getElementById('repo').value.trim();
    const list = document.getElementById('links');
    list.innerHTML = '';

    if (!username || !repo) return list.innerHTML = '<li style="color: red">Please enter a valid username or repository name.</li>';

    const links = [
        { label: 'Repository Link', url: `https://github.com/${username}/${repo}` },
        { label: 'Issues (all)', url: `https://github.com/${username}/${repo}/issues` },
        { label: 'Issues (open)', url: `https://github.com/${username}/${repo}/issues?q=is%3Aissue%20state%3Aopen` },
        { label: 'Issues (closed)', url: `https://github.com/${username}/${repo}/issues?q=is%3Aissue%20state%3Aclosed` },
        { label: 'Issue labels', url: `https://github.com/${username}/${repo}/labels` },
        { label: 'Issue milestones', url: `https://github.com/${username}/${repo}/milestones` },
    ];

    document.getElementById('linksHeading').innerHTML = 'Links';

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`
        list.appendChild(li);
    });
}