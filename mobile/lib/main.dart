import 'package:flutter/material.dart';
import 'package:todoapp/ui/screens/home.dart';
import 'package:todoapp/ui/screens/task/create.dart';

void main() {
  runApp(const Main());
}

class Main extends StatelessWidget {
  const Main({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const Home(),
      routes: <String, WidgetBuilder>{
        '/create-task': (BuildContext context) => const CreateTask(),
      },
    );
  }
}
