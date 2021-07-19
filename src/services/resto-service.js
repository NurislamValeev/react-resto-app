export default class RestoService {
   _apiBase = 'http://localhost:3000'

   async getResource(url) {
      const response = await fetch(`${this._apiBase}${url}`)

      if (!response.ok) {
         throw new Error(`Couldn't fetch ${url}, received ${response.status}`)
      }
      return await response.json()
   }

   async getMenuItems() {
      return await this.getResource('/menu/')
   }
}