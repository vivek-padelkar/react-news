import dotenv from 'dotenv'
import express from 'express'
import NewsAPI from 'newsapi'
import axios from 'axios'
dotenv.config()

const newsAPi = new NewsAPI(process.env.NEWSAPIKEY)
const app = express()

app.listen(process.env.PORT, () => {
  console.log('API IS RUNNING ON PORT:' + process.env.PORT)
})

async function getNews() {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWSAPIKEY}`
  )

  console.log(data)
}

getNews()
