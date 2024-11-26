List<TaskModel> taskList = [
  TaskModel(
      id: "1",
      title: "Task 1",
      description: "Description 1",
      state: "TODO",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "2",
      title: "Task 2",
      description: "Description 2",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "3",
      title: "Task 3",
      description: "Description 3",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "DONE",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "DONE",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "TODO",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "TODO",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "DONE",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "DONE",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "TODO",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "TODO",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "4",
      title: "Task 4",
      description: "Description 4",
      state: "PROCESSING",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
  TaskModel(
      id: "5",
      title: "Task 5",
      description: "Description 5",
      state: "DONE",
      startDate: DateTime.now(),
      endDate: DateTime.now().add(const Duration(days: 1)),
      createdAt: DateTime.now()),
];

class TaskModel {
  //  task list

  final String id;
  final String title;
  final String description;
  final String state;
  final DateTime startDate;
  final DateTime endDate;

  final DateTime createdAt;

  TaskModel(
      {required this.id,
      required this.title,
      required this.description,
      required this.state,
      required this.startDate,
      required this.endDate,
      required this.createdAt});
}
