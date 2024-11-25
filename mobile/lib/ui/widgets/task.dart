import 'package:flutter/material.dart';

class Task extends StatelessWidget {
  final String title;
  final String description;
  final bool isDone;
  final Function toggleTask;

  const Task(
      {super.key,
      required this.title,
      required this.description,
      required this.isDone,
      required this.toggleTask});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(
        title,
        style: TextStyle(
          decoration: isDone ? TextDecoration.lineThrough : null,
        ),
      ),
      subtitle: Text(
        description,
        style: TextStyle(
          decoration: isDone ? TextDecoration.lineThrough : null,
        ),
      ),
      trailing: Checkbox(
        value: isDone,
        onChanged: toggleTask(),
      ),
    );
  }
}
