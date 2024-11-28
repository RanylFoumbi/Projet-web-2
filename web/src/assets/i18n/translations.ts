import { Translations } from 'src/app/models/language.model';

export const translations: Translations = {
  en: {
    home: {
      title: 'TODO',
      noTasks: 'No tasks available.',
    },
    auth: {
      login: {
        title: 'Login',
        email: 'Email',
        password: 'Password',
        login: 'Login',
        noAccount: 'Don\'t have an account?',
        signUp: 'Sign up',
        errorMessage: 'Incorrect email or password',
      },
      signup: {
        title: 'Sign up',
        email: 'Email',
        password: 'Password',
        signUp: 'Sign up',
        alreadyAccount: 'Already have an account?',
        login: 'Login',
        errorMessage: 'An error occurred during registration',
      },
      logout: {
        logout: 'Logout'
      },
      guard: {
        logged: 'Logged in as',
        notLogged1: 'It appears you are not logged in. Please',
        notLogged2: 'Login',
        notLogged3: 'to continue.',
      }
    },
    task: {
      state: {
        TODO: 'To do',
        DOING: 'In progress',
        DONE: 'Completed',
        CANCELLED: 'Cancelled',
        ALL: 'All',
      },
      actions: {
        edit: 'Edit task',
        delete: 'Delete',
        confirm: 'Confirm',
        dialog: 'Are you sure you want to delete this task?',
        cancel: 'Cancel',
        create: 'Create task',
        save: 'Save',
      },
      confirm: {
        update: 'Task successfully updated',
        delete: 'Task successfully deleted',
        deletes: 'Tasks successfully deleted',
        add: 'Task successfully added',
      },
      form: {
        title: 'Task title',
        description: 'Task description',
        state: 'Status',
        startDate: 'Start date',
        endDate: 'End date',
      },
    },
    language: {
      french: 'French',
      english: 'English',
      spanish: 'Spanish',
      german: 'German',
      portuguese: 'Portuguese',
      korean: 'Korean',
      russian: 'Russian',
      japanese: 'Japanese',
    },
    search: {
        placeholder: 'Search',
    },
  },
  fr: {
    home: {
      title: 'À FAIRE',
      noTasks: 'Aucune tâche disponible pour le moment.',
    },
    auth: {
      login: {
        title: 'Se connecter',
        email: 'Email',
        password: 'Mot de passe',
        login: 'Se connecter',
        noAccount: 'Pas de compte ?',
        signUp: 'S\'inscrire',
        errorMessage: 'Email ou mot de passe incorrect',
      },
      signup: {
        title: 'S\'inscrire',
        email: 'Email',
        password: 'Mot de passe',
        signUp: 'S\'inscrire',
        alreadyAccount: 'Vous avez déjà un compte ?',
        login: 'Se connecter',
        errorMessage: 'Une erreur est survenue lors de l\'inscription',
      },
      logout: {
        logout: 'Se déconnecter'
      },
      guard: {
        logged: 'Connecté en tant que',
        notLogged1: 'Il semble que vous n\'êtes pas connecté. Veuillez vous',
        notLogged2: 'connecter',
        notLogged3: 'pour continuer.',
      }
    },
    task: {
      state: {
        TODO: 'À faire',
        DOING: 'En cours',
        DONE: 'Terminée',
        CANCELLED: 'Annulée',
        ALL: 'Toutes',
      },
      actions: {
        edit: 'Modifier la tâche',
        delete: 'Supprimer',
        confirm: 'Confirmer',
        dialog: 'Êtes-vous sûr de vouloir supprimer cette tâche?',
        cancel: 'Annuler',
        create: 'Créer une tâche',
        save: 'Enregistrer',
      },
      confirm: {
        update: 'Tâche mise à jour avec succès',
        delete: 'Tâche supprimée avec succès',
        deletes: 'Tâches supprimées avec succès',
        add: 'Tâche ajoutée avec succès',
      },
      form: {
        title: 'Titre de la tâche',
        description: 'Description de la tâche',
        state: 'Statut',
        startDate: 'Date de début',
        endDate: 'Date de fin',
      }
    },
    language: {
      french: 'Français',
      english: 'Anglais',
      spanish: 'Espagnol',
      german: 'Allemand',
      portuguese: 'Portugais',
      korean: 'Coréen',
      russian: 'Russe',
      japanese: 'Japonais',
    },
    search: {
        placeholder: 'Rechercher',
    },
  },
  es: {
    home: {
      title: 'POR HACER',
      noTasks: 'No hay tareas disponibles por el momento.',
    },
    auth: {
      login: {
        title: 'Iniciar sesión',
        email: 'Correo electrónico',
        password: 'Contraseña',
        login: 'Iniciar sesión',
        noAccount: '¿No tienes cuenta?',
        signUp: 'Registrarse',
        errorMessage: 'Correo electrónico o contraseña incorrectos',
      },
      signup: {
        title: 'Registrarse',
        email: 'Correo electrónico',
        password: 'Contraseña',
        signUp: 'Registrarse',
        alreadyAccount: '¿Ya tienes una cuenta?',
        login: 'Iniciar sesión',
        errorMessage: 'Ocurrió un error durante el registro',
      },
      logout: {
        logout: 'Cerrar sesión'
      },
      guard: {
        logged: 'Conectado como',
        notLogged1: 'Parece que no has iniciado sesión. Por favor,',
        notLogged2: 'inicia sesión',
        notLogged3: 'para continuar.',
      }
    },
    task: {
      state: {
        TODO: 'Por hacer',
        DOING: 'En curso',
        DONE: 'Terminada',
        CANCELLED: 'Cancelada',
        ALL: 'Todas',
      },
      actions: {
        edit: 'Editar tarea',
        delete: 'Eliminar',
        confirm: 'Confirmar',
        dialog: '¿Está seguro de que desea eliminar esta tarea?',
        cancel: 'Cancelar',
        create: 'Crear tarea',
        save: 'Guardar',
      },
      confirm: {
        update: 'Tarea actualizada con éxito',
        delete: 'Tarea eliminada con éxito',
        deletes: 'Tareas eliminadas con éxito',
        add: 'Tarea añadida con éxito',
      },
      form: {
        title: 'Título de la tarea',
        description: 'Descripción de la tarea',
        state: 'Estado',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha de finalización',
      },
    },
    language: {
      french: 'Francés',
      english: 'Inglés',
      spanish: 'Español',
      german: 'Alemán',
      portuguese: 'Portugués',
      korean: 'Coreano',
      russian: 'Ruso',
      japanese: 'Japonés',
    },
    search: {
      placeholder: 'Buscar',
    },
  },
  de: {
    home: {
      title: 'TODO',
      noTasks: 'Keine Aufgaben verfügbar.',
    },
    auth: {
      login: {
        title: 'Einloggen',
        email: 'E-Mail',
        password: 'Passwort',
        login: 'Einloggen',
        noAccount: 'Kein Konto?',
        signUp: 'Registrieren',
        errorMessage: 'Falsche E-Mail oder Passwort',
      },
      signup: {
        title: 'Registrieren',
        email: 'E-Mail',
        password: 'Passwort',
        signUp: 'Registrieren',
        alreadyAccount: 'Hast du schon ein Konto?',
        login: 'Einloggen',
        errorMessage: 'Ein Fehler ist bei der Registrierung aufgetreten',
      },
      logout: {
        logout: 'Ausloggen'
      },
      guard: {
        logged: 'Eingeloggt als',
        notLogged1: 'Es scheint, dass du nicht eingeloggt bist. Bitte',
        notLogged2: 'logge',
        notLogged3: 'dich ein um fortzufahren.',
      }
    },
    task: {
      state: {
        TODO: 'Zu tun',
        DOING: 'In Bearbeitung',
        DONE: 'Abgeschlossen',
        CANCELLED: 'Abgebrochen',
        ALL: 'Alle',
      },
      actions: {
        edit: 'Aufgabe bearbeiten',
        delete: 'Löschen',
        confirm: 'Bestätigen',
        dialog: 'Sind Sie sicher, dass Sie diese Aufgabe löschen möchten?',
        cancel: 'Abbrechen',
        create: 'Aufgabe erstellen',
        save: 'Speichern',
      },
      confirm: {
        update: 'Aufgabe erfolgreich aktualisiert',
        delete: 'Aufgabe erfolgreich gelöscht',
        deletes: 'Aufgaben erfolgreich gelöscht',
        add: 'Aufgabe erfolgreich hinzugefügt',
      },
      form: {
        title: 'Aufgabentitel',
        description: 'Aufgabenbeschreibung',
        state: 'Status',
        startDate: 'Startdatum',
        endDate: 'Enddatum',
      },
    },
    language: {
      french: 'Französisch',
      english: 'Englisch',
      spanish: 'Spanisch',
      german: 'Deutsch',
      portuguese: 'Portugiesisch',
      korean: 'Koreanisch',
      russian: 'Russisch',
      japanese: 'Japanisch',
    },
    search: {
      placeholder: 'Suchen',
    },
  },
  pt: {
    home: {
      title: 'TODO',
      noTasks: 'Nenhuma tarefa disponível.',
    },
    auth: {
      login: {
        title: 'Entrar',
        email: 'E-mail',
        password: 'Senha',
        login: 'Entrar',
        noAccount: 'Não tem uma conta?',
        signUp: 'Cadastrar-se',
        errorMessage: 'E-mail ou senha incorretos',
      },
      signup: {
        title: 'Cadastrar-se',
        email: 'E-mail',
        password: 'Senha',
        signUp: 'Cadastrar-se',
        alreadyAccount: 'Já tem uma conta?',
        login: 'Entrar',
        errorMessage: 'Ocorreu um erro durante o registro',
      },
      logout: {
        logout: 'Sair'
      },
      guard: {
        logged: 'Logado como',
        notLogged1: 'Parece que você não está logado. Por favor, faça',
        notLogged2: 'login',
        notLogged3: 'para continuar.',
      }
    },    
    task: {
      state: {
        TODO: 'A fazer',
        DOING: 'Em andamento',
        DONE: 'Concluída',
        CANCELLED: 'Cancelada',
        ALL: 'Todas',
      },
      actions: {
        edit: 'Editar tarefa',
        delete: 'Excluir',
        confirm: 'Confirmar',
        dialog: 'Tem certeza de que deseja excluir esta tarefa?',
        cancel: 'Cancelar',
        create: 'Criar tarefa',
        save: 'Salvar',
      },
      confirm: {
        update: 'Tarefa atualizada com sucesso',
        delete: 'Tarefa excluída com sucesso',
        deletes: 'Tarefas excluídas com sucesso',
        add: 'Tarefa adicionada com sucesso',
      },
      form: {
        title: 'Título da tarefa',
        description: 'Descrição da tarefa',
        state: 'Status',
        startDate: 'Data de início',
        endDate: 'Data de término',
      },
    },
    language: {
      french: 'Francês',
      english: 'Inglês',
      spanish: 'Espanhol',
      german: 'Alemão',
      portuguese: 'Português',
      korean: 'Coreano',
      russian: 'Russo',
      japanese: 'Japonês',
    },
    search: {
      placeholder: 'Pesquisar',
    },
  },
  ru: {
    home: {
      title: 'TODO',
      noTasks: 'Задачи отсутствуют.',
    },
    auth: {
      login: {
        title: 'Войти',
        email: 'Электронная почта',
        password: 'Пароль',
        login: 'Войти',
        noAccount: 'Нет аккаунта?',
        signUp: 'Зарегистрироваться',
        errorMessage: 'Неверный email или пароль',
      },
      signup: {
        title: 'Регистрация',
        email: 'Электронная почта',
        password: 'Пароль',
        signUp: 'Зарегистрироваться',
        alreadyAccount: 'Уже есть аккаунт?',
        login: 'Войти',
        errorMessage: 'Произошла ошибка при регистрации',
      },
      logout: {
        logout: 'Выйти'
      },
      guard: {
        logged: 'Вошли как',
        notLogged1: 'Похоже, вы не вошли в систему. Пожалуйста,',
        notLogged2: 'войдите',
        notLogged3: 'чтобы продолжить.',
      }
    },    
    task: {
      state: {
        TODO: 'К выполнению',
        DOING: 'В процессе',
        DONE: 'Завершено',
        CANCELLED: 'Отменено',
        ALL: 'Все',
      },
      actions: {
        edit: 'Редактировать задачу',
        delete: 'Удалить',
        confirm: 'Подтвердить',
        dialog: 'Вы уверены, что хотите удалить эту задачу?',
        cancel: 'Отменить',
        create: 'Создать задачу',
        save: 'Сохранить',
      },
      confirm: {
        update: 'Задача успешно обновлена',
        delete: 'Задача успешно удалена',
        deletes: 'Задачи успешно удалены',
        add: 'Задача успешно добавлена',
      },
      form: {
        title: 'Название задачи',
        description: 'Описание задачи',
        state: 'Статус',
        startDate: 'Дата начала',
        endDate: 'Дата окончания',
      },
    },
    language: {
      french: 'Французский',
      english: 'Английский',
      spanish: 'Испанский',
      german: 'Немецкий',
      portuguese: 'Португальский',
      korean: 'Корейский',
      russian: 'Русский',
      japanese: 'Японский',
    },
    search: {
      placeholder: 'Поиск',
    },
  },    
  ja: {
    home: {
      title: 'TODO',
      noTasks: '現在利用可能なタスクはありません。',
    },
    auth: {
      login: {
        title: 'ログイン',
        email: 'メールアドレス',
        password: 'パスワード',
        login: 'ログイン',
        noAccount: 'アカウントがありませんか？',
        signUp: 'サインアップ',
        errorMessage: 'メールアドレスまたはパスワードが正しくありません',
      },
      signup: {
        title: 'サインアップ',
        email: 'メールアドレス',
        password: 'パスワード',
        signUp: 'サインアップ',
        alreadyAccount: 'すでにアカウントをお持ちですか？',
        login: 'ログイン',
        errorMessage: '登録中にエラーが発生しました',
      },
      logout: {
        logout: 'ログアウト'
      },
      guard: {
        logged: 'ログイン中：',
        notLogged1: 'ログインしていないようです。以下の手順で',
        notLogged2: 'ログインしてください',
        notLogged3: '続行するために。',
      }
    },    
    task: {
      state: {
        TODO: 'やること',
        DOING: '進行中',
        DONE: '完了',
        CANCELLED: 'キャンセル',
        ALL: 'すべて',
      },
      actions: {
        edit: 'タスクを編集',
        delete: '削除',
        confirm: '確認',
        dialog: 'このタスクを削除してもよろしいですか？',
        cancel: 'キャンセル',
        create: 'タスクを作成',
        save: '保存',
      },
      confirm: {
        update: 'タスクが正常に更新されました',
        delete: 'タスクが正常に削除されました',
        deletes: 'タスクが正常に削除されました',
        add: 'タスクが正常に追加されました',
      },
      form: {
        title: 'タスクタイトル',
        description: 'タスクの説明',
        state: 'ステータス',
        startDate: '開始日',
        endDate: '終了日',
      },
    },
    language: {
      french: 'フランス語',
      english: '英語',
      spanish: 'スペイン語',
      german: 'ドイツ語',
      portuguese: 'ポルトガル語',
      korean: '韓国語',
      russian: 'ロシア語',
      japanese: '日本語',
    },
    search: {
      placeholder: '検索',
    },
  },
  kr: {
    home: {
      title: 'TODO',
      noTasks: '작업이 없습니다.',
    },
    auth: {
      login: {
        title: '로그인',
        email: '이메일',
        password: '비밀번호',
        login: '로그인',
        noAccount: '계정이 없으신가요?',
        signUp: '회원가입',
        errorMessage: '이메일 또는 비밀번호가 올바르지 않습니다',
      },
      signup: {
        title: '회원가입',
        email: '이메일',
        password: '비밀번호',
        signUp: '회원가입',
        alreadyAccount: '이미 계정이 있으신가요?',
        login: '로그인',
        errorMessage: '회원가입 중 오류가 발생했습니다',
      },
      logout: {
        logout: '로그아웃'
      },
      guard: {
        logged: '로그인 중인 계정:',
        notLogged1: '로그인하지 않으신 것 같습니다. 아래에서',
        notLogged2: '로그인',
        notLogged3: '하여 계속 진행해 주세요.',
      }
    },    
    task: {
      state: {
        TODO: '할 일',
        DOING: '진행 중',
        DONE: '완료됨',
        CANCELLED: '취소됨',
        ALL: '모두',
      },
      actions: {
        edit: '작업 수정',
        delete: '삭제',
        confirm: '확인',
        dialog: '이 작업을 삭제하시겠습니까?',
        cancel: '취소',
        create: '작업 생성',
        save: '저장',
      },
      confirm: {
        update: '작업이 성공적으로 업데이트되었습니다',
        delete: '작업이 성공적으로 삭제되었습니다',
        deletes: '작업들이 성공적으로 삭제되었습니다',
        add: '작업이 성공적으로 추가되었습니다',
      },
      form: {
        title: '작업 제목',
        description: '작업 설명',
        state: '상태',
        startDate: '시작 날짜',
        endDate: '종료 날짜',
      },
    },
    language: {
      french: '프랑스어',
      english: '영어',
      spanish: '스페인어',
      german: '독일어',
      portuguese: '포르투갈어',
      korean: '한국어',
      russian: '러시아어',
      japanese: '일본어',
    },
    search: {
      placeholder: '검색',
    },
  },
};
