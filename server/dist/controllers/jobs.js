"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobs = exports.createJob = void 0;
const job_1 = __importDefault(require("../models/job"));
const createJob = async (req, res) => {
    try {
        const userId = req.user?.uid;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized: No user ID found' });
            return;
        }
        const job = new job_1.default({
            ...req.body,
            userId
        });
        await job.save();
        res.status(201).json(job);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.createJob = createJob;
const getJobs = async (req, res) => {
    try {
        const userId = req.user?.uid;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized: No user ID found' });
            return;
        }
        const jobs = await job_1.default.find({ userId });
        res.status(200).json(jobs);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.getJobs = getJobs;
const updateJob = async (req, res) => {
    try {
        const userId = req.user?.uid;
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized: No user ID found' });
        }
        const job = await job_1.default.findOneAndUpdate({ _id: req.params.id, userId }, // ✅ Ensure `userId` is properly checked
        req.body, { new: true });
        if (!job)
            return res.status(404).json({ error: 'Job not found' });
        res.json(job);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.updateJob = updateJob;
const deleteJob = async (req, res) => {
    try {
        const userId = req.user?.uid;
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized: No user ID found' });
        }
        const job = await job_1.default.findOneAndDelete({
            _id: req.params.id,
            userId
        });
        if (!job)
            return res.status(404).json({ error: 'Job not found' });
        res.json({ message: 'Job deleted' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.deleteJob = deleteJob;
