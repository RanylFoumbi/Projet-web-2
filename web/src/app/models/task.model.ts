export type Task = {
    id: string;
    title: string;
    description: string;
    state: TaskState;
    startDate: Date;
    endDate: Date;
};

export enum TaskState {
    DOING = 'DOING',
    DONE = 'DONE',
    CANCELLED = 'CANCELLED',
    TODO = 'TODO',
}

export type SelectTask = {
    id: string;
    selected: Boolean;
}