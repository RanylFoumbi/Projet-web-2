export type Task = {
    id: string;
    title: string;
    description: string;
    state: TaskState;
};

export enum TaskState {
    DOING = 'En cours',
    DONE = 'Terminée',
    CANCELLED = 'Annulée',
    TODO = 'À faire',
}