import { default as fetchAxios, CreateAxiosDefaults } from 'axios'

const config: CreateAxiosDefaults = {
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const axios = fetchAxios.create(config)
