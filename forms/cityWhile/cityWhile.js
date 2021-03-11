let cities = []
let cityInput = prompt('Enter a city')
while (cityInput != ''){
  cities.push(cityInput)
  cityInput = prompt('Enter another city or nothing to end the input.')
}
i = 0
while(i < cities.length){
  console.log(cities[i].toLowerCase())
  i += 1
}