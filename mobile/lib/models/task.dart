class TaskModel {
  //  task list

  final String? id;
  final String title;
  final String description;
  final String state;
  final DateTime startDate;
  final DateTime endDate;

  final DateTime? updatedAt;

  TaskModel(
      {this.id,
      required this.title,
      required this.description,
      required this.state,
      required this.startDate,
      required this.endDate,
      this.updatedAt});
}
