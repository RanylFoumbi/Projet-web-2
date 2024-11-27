import { Translations } from 'src/app/models/language.model';

export const translations: Translations = {
  en: {
    home: {
      title: 'TODO',
      noTasks: 'No tasks available.',
    },
    task: {
      state: {
        TODO: 'To do',
        DOING: 'In progress',
        DONE: 'Completed',
        CANCELLED: 'Cancelled',
      },
      actions: {
        edit: 'Edit',
        delete: 'Delete',
        confirm: 'Confirm',
        dialog: 'Are you sure you want to delete this task?',
        cancel: 'Cancel',
      },
    },
    language: {
      french: 'French',
      english: 'English',
    },
    search: {
        placeholder: 'Search',
    },
  },
  fr: {
    home: {
      title: 'À FAIRE',
      noTasks: 'Aucune tâche disponible.',
    },
    task: {
      state: {
        TODO: 'À faire',
        DOING: 'En cours',
        DONE: 'Terminée',
        CANCELLED: 'Annulée',
      },
      actions: {
        edit: 'Modifier',
        delete: 'Supprimer',
        confirm: 'Confirmer',
        dialog: 'Êtes-vous sûr de vouloir supprimer cette tâche?',
        cancel: 'Annuler',
      },
    },
    language: {
      french: 'Français',
      english: 'Anglais',
    },
    search: {
        placeholder: 'Rechercher',
    },
  },
};
