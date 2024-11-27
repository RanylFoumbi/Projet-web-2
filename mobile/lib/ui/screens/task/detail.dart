import 'package:flutter/material.dart';
import 'package:todoapp/models/task.dart';

class TaskDetail extends StatefulWidget {
  final TaskModel task;

  const TaskDetail({Key? key, required this.task}) : super(key: key);

  @override
  State<TaskDetail> createState() => _TaskDetailState();
}

class _TaskDetailState extends State<TaskDetail> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.task.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(widget.task.description),
            const SizedBox(height: 16),
            Text(widget.task.updatedAt.toString()),
          ],
        ),
      ),
    );
  }
}
