import express from 'express'
import path from 'path'
import fs from 'fs'

type Post = {
    id: number
    author_id: number
    title: string
    body: string
    image_url: string
    created_at: string
}

type Author = {
    id: number
    name: string
    role: string
    place: string
    avatar_url: string
}

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', async (req, res) => {
    const readJsonFile = (filePath: string) => {
        const jsonData = fs.readFileSync(filePath, 'utf8')

        return JSON.parse(jsonData)
    }

    const authors = readJsonFile(path.resolve(__dirname, 'src', 'authors.json'))
    const posts = readJsonFile(path.resolve(__dirname, 'src', 'posts.json'))
    const postsMapped = posts.map((post:Post) => {
        const authorPost = authors.find((author: Author) => author.id === post.author_id)
        return post = {
            ...post,
            ...authorPost
        }
    })

    res.render('page', { postsMapped })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})