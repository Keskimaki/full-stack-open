import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const object = { content, votes: 0}
  const res = await axios.post(baseUrl, object)
  return res.data
}

const addVote = async (content) => {
  content.votes++
  const res = await axios.put(`${baseUrl}/${content.id}`, content)
  return res.data
}

const anecdoteService = { getAll, createNew, addVote }

export default anecdoteService