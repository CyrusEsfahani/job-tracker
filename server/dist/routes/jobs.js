"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebaseAuth_1 = require("../middleware/firebaseAuth");
const jobs_1 = require("../controllers/jobs");
const router = express_1.default.Router();
// ✅ Use `verifyToken` correctly as middleware
router.use(firebaseAuth_1.verifyToken);
router.get('/', jobs_1.getJobs);
router.post('/', jobs_1.createJob);
exports.default = router;
