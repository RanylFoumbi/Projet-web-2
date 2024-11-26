export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};

export enum TaskStatus {
    Doing = 'En cours',
    Completed = 'Terminée',
    Cancelled = 'Annulée',
    Todo = 'À faire',
}
