"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndeedJobs = void 0;
const axios_1 = __importDefault(require("axios"));
const getIndeedJobs = async (query, location) => {
    try {
        const response = await axios_1.default.get('https://api.indeed.com/ads/apisearch', {
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
    }
    catch (error) {
        throw new Error('Failed to fetch Indeed jobs');
    }
};
exports.getIndeedJobs = getIndeedJobs;
