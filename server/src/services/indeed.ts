import axios from 'axios';

export const getIndeedJobs = async (query: string, location: string) => {
  try {
    const response = await axios.get('https://api.indeed.com/ads/apisearch', {
      params: {
        publisher: process.env.INDEED_API_KEY,
        v: 2,
        format: 'json',
        q: query,
        l: location,
        limit: 25
      }
    });
    
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch Indeed jobs');
  }
};