export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};

export enum TaskStatus {
    Pending = 'En cours',
    Completed = 'Terminée',
    Cancelled = 'Annulée',
    Todo = 'À faire'
}