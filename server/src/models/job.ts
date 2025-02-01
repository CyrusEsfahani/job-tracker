import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  company: string;
  role: string;
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  deadline: Date;
  notes?: string;
  userId: mongoose.Schema.Types.ObjectId;
}

const JobSchema: Schema = new Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Applied', 'Interviewing', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  deadline: { type: Date },
  notes: { type: String },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  }
}, { timestamps: true });

export default mongoose.model<IJob>('Job', JobSchema);