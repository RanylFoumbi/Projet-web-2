export interface Translations {
    [key: string]: {
      home: {
        title: string;
        noTasks: string;
      };
      task: {
        state: {
          TODO: string;
          DOING: string;
          DONE: string;
          CANCELLED: string;
        };
        actions: {
          edit: string;
          delete: string;
          confirm: string;
          dialog: string;
          cancel: string;
          create: string
          save: string;
        };
        confirm: {
            update: string;
            delete: string;
            deletes: string;
            add: string;
        };
        form: {
            title: string;
            description: string;
            state: string;
            startDate: string;
            endDate: string;
        };
      };
      language: {
        french: string;
        english: string;
      };
      search: {
        placeholder: string;
      };
    };
  }
  