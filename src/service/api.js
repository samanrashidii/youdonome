const { BASE_URL } = process.env
// const API_URL = ''
export default {
  getProfiles: { method: 'GET', url: `${BASE_URL}api/profiles.json` },
  getQuestions: { method: 'GET', url: `${BASE_URL}api/questions.json` }
}
