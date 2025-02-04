export interface Job {
    id: string;
    company: string;
    role: string;
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
    deadline: Date;
    userId: string;
  }