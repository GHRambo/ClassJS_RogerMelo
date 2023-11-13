const postTitle = 'É bolacha ou biscoito?'
const postAutor = 'Emanuel Saad'
const postComments = 15

// Usando concatenação
// const postMessage = 'O post "' + postTitle + '", do '+ postAutor + ', tem ' + postComents + ' comentarios.'

// console.log('Você manja do filme \'As branquelas\'?')

// Usando Template Strings
// const postMessage = `O post "${postTitle}", do autor ${postAutor}, tem ${postComments} comentarios.`

// Criando template HTML
const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAutor}</p>
    <span>O post tem ${postComments} comentarios</span>
`

console.log(html)