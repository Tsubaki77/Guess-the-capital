const key = "jB8es7bBVboN8lB07fSl1YLomjwx8Ihq7IHnAUmg"

const url = (`https://countryapi.io/api/all?apikey=${key}`)


fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

const img = document.createElement('img')