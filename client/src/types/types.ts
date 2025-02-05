export interface Job {
    id: string;
    company: string;
    role: string;
    status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
    deadline: Date;
    userId: string;
  }
export interface DropResult {
    draggableId: string;
    source: {
      droppableId: string;
      index: number;
    };
    destination: {
      droppableId: string;
      index: number;
    } | null;
  }