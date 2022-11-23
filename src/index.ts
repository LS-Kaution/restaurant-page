const content = document.querySelector('#content')
const header = document.createElement('header')
const main = document.createElement('main')
const footer = document.createElement('footer')

content?.prepend(header)
content?.appendChild(footer)
content?.insertBefore(main, footer)