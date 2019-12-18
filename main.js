function getRepos() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
        let userSearch = document.getElementById('userInput').value.toLowerCase();
        let userRepos = "https://api.github.com/users/"+`${userSearch}`+"/repos";
        callGithub(userRepos);
    });
};

function callGithub(userRepos) {
    fetch(userRepos)
    .then(response => response.json())
    .then(responseJson => populateRepos(responseJson));
};

function populateRepos(responseJson) {
    for (i = 0; i < responseJson.length; i++) {
        let repoName = responseJson[i].name;
        let repoLink = responseJson[i].full_name;
        $('ul').append(`<li>${repoName} - <a href="http://github.com/${repoLink}">VIEW REPO</a></li>`);
    }
}

getRepos();