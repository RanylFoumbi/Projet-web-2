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
    task: {
      state: {
        TODO: 'À faire',
        DOING: 'En cours',
        DONE: 'Terminée',
        CANCELLED: 'Annulée',
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
    },
    search: {
        placeholder: 'Rechercher',
    },
  },
};
