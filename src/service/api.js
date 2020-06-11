const { BASE_URL } = process.env
// const API_URL = ''
export default {
  // API Sample
  getRoles: { method: 'GET', url: `${BASE_URL}/api/roles.json` }
}
