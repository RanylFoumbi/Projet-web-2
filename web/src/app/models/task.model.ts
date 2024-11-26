export type Task = {
    id: string;
    title: string;
    description: string;
    state: TaskState;
    startDate: Date;
    endDate: Date;
};

export enum TaskState {
    DOING = 'En cours',
    DONE = 'Terminée',
    CANCELLED = 'Annulée',
    TODO = 'À faire',
}

export type STateUpdate = {
    id: string;
    state: TaskState;
}