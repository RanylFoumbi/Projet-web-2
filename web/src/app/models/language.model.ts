export interface Translations {
    [key: string]: {
      home: {
        title: string;
        noTasks: string;
      };
      auth: {
        login: {
          title: string;
          email: string;
          password: string;
          login: string;
          noAccount: string;
          signUp: string;
          errorMessage: string;
        };
        signup: {
          title: string;
          email: string;
          password: string;
          signUp: string;
          alreadyAccount: string;
          login: string;
          errorMessage: string;
        };
        logout: {
          logout: string;
        };
        guard: {
          logged: string;
          notLogged1: string;
          notLogged2: string;
          notLogged3: string;
        };
      };
      task: {
        state: {
          TODO: string;
          DOING: string;
          DONE: string;
          CANCELLED: string;
          ALL: string;
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
        spanish: string;
        german: string;
        portuguese: string;
        korean: string;
        russian: string;
        japanese: string;
      };
      search: {
        placeholder: string;
      };
    };
  }
  