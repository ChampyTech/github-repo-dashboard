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
        { label: 'Labels', url: `https://github.com/${username}/${repo}/labels` },
        { label: 'Milestones', url: `https://github.com/${username}/${repo}/milestones` },
        { label: 'Pull requests (all)', url: `https://github.com/${username}/${repo}/pulls` },
        { label: 'Pull requests (open)', url: `https://github.com/${username}/${repo}/pulls?q=is%3Aopen+is%3Apr` },
        { label: 'Pull requests (closed)', url: `https://github.com/${username}/${repo}/pulls?q=is%3Apr+is%3Aclosed` },
        { label: 'Discussions', url: `https://github.com/${username}/${repo}/discussions` },
        { label: 'Actions', url: `https://github.com/${username}/${repo}/actions` },
        { label: 'Projects', url: `https://github.com/${username}/${repo}/projects` },
        { label: 'Projects (open)', url: `https://github.com/${username}/${repo}/projects?query=is%3Aopen` },
        { label: 'Projects (closed)', url: `https://github.com/${username}/${repo}/projects?query=is%3Aclosed` },
        { label: 'Security', url: `https://github.com/${username}/${repo}/security` },
        { label: 'Insights', url: `https://github.com/${username}/${repo}/pulse` },
        { label: 'README File', url: `https://github.com/${username}/${repo}#readme-ov-file` },
        { label: 'Activity', url: `https://github.com/${username}/${repo}/activity` },
        { label: 'Stars', url: `https://github.com/${username}/${repo}/stargazers` },
        { label: 'Watchers', url: `https://github.com/${username}/${repo}/watchers` },
        { label: 'Forks', url: `https://github.com/${username}/${repo}/forks` },
        { label: 'Deployments', url: `https://github.com/${username}/${repo}/deployments` },
        { label: 'Branches', url: `https://github.com/${username}/${repo}/branches` },
        { label: 'Tags', url: `https://github.com/${username}/${repo}/tags` },
        { label: 'Releases', url: `https://github.com/${username}/${repo}/releases` },
        { label: 'Packages', url: `https://github.com/${username}?tab=packages&repo_name=${repo}` },
    ];

    document.getElementById('linksHeading').innerHTML = 'Links';

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`
        list.appendChild(li);
    });
}