export type Task = {
    id: string;
    name: string;
    description: string;
    status: TaskStatus;
};

export enum TaskStatus {
    Pending = 'pending',
    Completed = 'completed',
    Archived = 'archived'
}