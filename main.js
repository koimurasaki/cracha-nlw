const userSocialMedia = {
  github: 'koimurasaki',
  youtube: '#',
  instagram: '#',
  facebook: '#',
  twitter: '#'
}

function changeDefaultLinks() {
  for (let li of socialMediaLinks.children) {
    const socialMedia = li.getAttribute('class')
    li.children[0].href = `https://www.${socialMedia}.com/${userSocialMedia[socialMedia]}`
  }
}

changeDefaultLinks()

function getGitHubProfileData() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      userPicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileData()
