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
  