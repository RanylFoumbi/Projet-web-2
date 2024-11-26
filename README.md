
# 📝 To-Do Application

Une application multi-plateforme pour la gestion des tâches, développée avec **Angular** pour le front-end web et **Flutter** pour le mobile.

---

## 🌟 Fonctionnalités

- Ajouter, modifier et supprimer des tâches.
- Rechercher des tâches par titre ou description.
- Statuts personnalisés avec des codes couleur :
  - **Todo** (À faire)
  - **In Progress** (En cours)
  - **Completed** (Terminée)
  - **Cancelled** (Annulée)
- Interface responsive pour le web.
- Application mobile Flutter offrant une expérience utilisateur native.

---

## 📂 Structure du projet

```plaintext
root/
├── angular-todo/       # Version Angular
│   ├── src/
│   │   ├── app/        # Composants Angular
│   │   └── assets/     # Fichiers statiques
│   └── package.json    # Dépendances Angular
├── flutter-todo/       # Version Flutter
│   ├── lib/
│   │   ├── screens/    # Écrans principaux
│   │   ├── widgets/    # Widgets réutilisables
│   └── pubspec.yaml    # Dépendances Flutter
└── README.md           # Ce fichier
```
## 🚀 Installation et Lancement
### Angular (Web)
Cloner le projet :
```bash
git clone https://github.com/username/todo-app.git
cd angular-todo
```
Installer les dépendances :
```bash
npm install
```
Lancer le projet :
```bash
ng serve
```
Le projet sera accessible à http://localhost:4200.

### Flutter (Mobile)
Cloner le projet :

```bash
git clone https://github.com/username/todo-app.git
cd flutter-todo
```
Installer les dépendances :
```bash
flutter pub get
```
Exécuter l'application :
```bash
flutter run
```
L'application s'exécutera sur un simulateur ou un appareil connecté.



## 🎨 Charte graphique

Voici les styles utilisés pour les statuts dans l'application Angular :

| Statut        | Bordure  | Fond     | Texte    |
|---------------|----------|----------|----------|
| **Todo**   | `#FDE047` | `#FEF9C3` | `#CA8A04` |
| **Completed** | `#86EFAC` | `#DCFCE7` | `#16A34A` |
| **Doing** | `#93C5FD` | `#DBEAFE` | `#2563EB` |
| **Cancelled**  | `#FCA5A5` | `#FEE2E2` | `#DC2626` |

## 🛠️ Technologies Utilisées
**Angular**: Framework front-end pour le web.
**Flutter**: SDK mobile pour créer des applications natives.
**Firebase**: Backend pour la gestion des données.

## 📜 Licence
Ce projet est sous licence MIT.
