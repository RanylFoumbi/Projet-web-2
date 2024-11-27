import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:todoapp/models/task.dart';

var db = FirebaseFirestore.instance.collection('tasks');

class TaskService {
  Future<void> addTask(TaskModel task) async {
    await db.add({
      'title': task.title,
      'description': task.description,
      'state': task.state,
      'startDate': task.startDate,
      'endDate': task.endDate,
      'updatedAt': DateTime.now(),
    });
  }

  Future<void> deleteTask(List<String> ids) async {
    await Future.forEach(ids, (id) async {
      await db.doc(id).delete();
    });
  }

  Stream<List<TaskModel>> getTasks() {
    return db.snapshots().map((snapshot) {
      return snapshot.docs.map<TaskModel>((doc) {
        return TaskModel(
          id: doc.id,
          title: doc['title'],
          description: doc['description'],
          state: doc['state'],
          startDate: doc['startDate'].toDate(),
          endDate: doc['endDate'].toDate(),
          updatedAt: doc['updatedAt'].toDate(),
        );
      }).toList();
    });
  }

// check fields changes before updating
  Future<void> updateTask(String id, task) async {
    await db.doc(id).update({
      'title': task.title,
      'description': task.description,
      'state': task.state,
      'startDate': task.startDate,
      'endDate': task.endDate,
      'updatedAt': DateTime.now(),
    });
  }
}
