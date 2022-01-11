const socialMedia = {
  github: 'rodsauro',
  instagram: 'rodsauro',
  facebook: 'rodrigo.almino',
  twitter: 'rodsauro',
  youtube: 'maykbrito'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${socialMedia[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
