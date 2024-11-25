export type Task = {
    id: String;
    title: string;
    description: string;
    status: TaskStatus;
};

export enum TaskStatus {
    Pending = 'Pending',
    Completed = 'Done',
    Cancelled = 'Cancelled',
    InProgress = 'In Progress'
}