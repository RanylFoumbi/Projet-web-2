import 'package:flutter/material.dart';
import 'package:todoapp/models/task.dart';
import 'package:todoapp/services/task.dart';
import 'package:todoapp/ui/screens/task/create-edit.dart';
import 'package:todoapp/ui/widgets/appbar.dart';
import 'package:todoapp/ui/widgets/task.dart';
import 'package:todoapp/ui/widgets/textformfield.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final TextEditingController _searchController = TextEditingController();
  final Set<String> _selectedTaskIds = {};
  List<TaskModel> _filteredTasks = [];
  List<TaskModel> _taskList = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(appBarHeight),
        child: CustomAppBar(
          title: 'TodoApp',
          isHome: true,
          onTapped: () {}, // No need for manual refresh
        ),
      ),
      backgroundColor: UIColors.backgroundColor,
      body: Column(
        children: [
          Container(
            color: UIColors.backgroundColor,
            padding: const EdgeInsets.symmetric(horizontal: xsSpacer),
            child: CustomTextFormField(
              controller: _searchController,
              keyboardType: TextInputType.text,
              placeholder: 'Rechercher',
              onChanged: _filterTasks,
              suffixIcon: _searchController.text.isNotEmpty
                  ? IconButton(
                      icon: const Icon(Icons.clear_rounded),
                      onPressed: () {
                        _searchController.clear();
                        _filterTasks('');
                      },
                    )
                  : null,
              prefixIcon: const Icon(Icons.search),
              validator: (value) => null,
              protected: false,
              inputFormatters: const [],
            ),
          ),
          const SizedBox(height: smSpacer),
          StreamBuilder<List<TaskModel>>(
            stream: TaskService().getTasks(),
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return SafeArea(
                  child: Container(
                    alignment: Alignment.center,
                    margin: const EdgeInsets.only(top: 100),
                    child: const CircularProgressIndicator(
                      strokeWidth: 2,
                    ),
                  ),
                );
              }

              if (_filteredTasks.isEmpty && _searchController.text.isNotEmpty ||
                  _taskList.isEmpty) {
                return SafeArea(
                  child: Container(
                    alignment: Alignment.center,
                    margin: const EdgeInsets.only(top: 100),
                    child: const Text(
                      'Aucune tâche trouvée !',
                      style: TextStyle(
                          color: UIColors.blackColor, fontSize: FONT_SIZE_MD),
                    ),
                  ),
                );
              }

              _taskList = snapshot.data!;
              if (_searchController.text.isEmpty) {
                _filteredTasks = _taskList;
              }

              return Expanded(
                child: GridView.builder(
                  padding: const EdgeInsets.symmetric(horizontal: xsSpacer),
                  itemCount: _filteredTasks.length,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 1,
                    childAspectRatio: 2 * 2.2,
                    crossAxisSpacing: xxsSpacer,
                    mainAxisSpacing: xxsSpacer,
                  ),
                  itemBuilder: (BuildContext context, int index) {
                    final task = _filteredTasks[index];
                    final isSelected = _selectedTaskIds.contains(task.id);
                    return TaskCard(
                      task: task,
                      isSelected: isSelected,
                      onSelect: (bool? isSelected) {
                        setState(() {
                          if (isSelected!) {
                            _selectedTaskIds.add(task.id!);
                          } else {
                            _selectedTaskIds.remove(task.id);
                          }
                        });
                      },
                      onEdit: () {
                        _editTask(task);
                      },
                    );
                  },
                ),
              );
            },
          ),
        ],
      ),
      floatingActionButton: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (_selectedTaskIds.isNotEmpty)
            FloatingActionButton(
              heroTag: 'delete',
              backgroundColor: UIColors.errorColor,
              onPressed: _deleteSelectedTasks,
              child: const Icon(Icons.delete, color: UIColors.whiteColor),
            ),
          const SizedBox(height: smSpacer),
          FloatingActionButton(
            heroTag: 'add',
            backgroundColor: UIColors.purpleColor,
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (context) => const CreateAndEditTask(
                    isEditing: false,
                  ),
                ),
              );
            },
            child: const Icon(Icons.add, color: UIColors.whiteColor),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    _getTasks();
  }

  void _deleteSelectedTasks() {
    TaskService().deleteTask(_selectedTaskIds.toList());
    setState(() {
      _selectedTaskIds.clear();
      _searchController.clear();
    });
  }

  void _editTask(TaskModel task) {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => CreateAndEditTask(
          isEditing: true,
          task: task,
        ),
      ),
    );
  }

  void _filterTasks(String query) {
    if (query.isNotEmpty) {
      setState(() {
        _filteredTasks = _taskList.where((task) {
          return task.title.toLowerCase().contains(query.toLowerCase()) ||
              task.description.toLowerCase().contains(query.toLowerCase());
        }).toList();
      });
    } else {
      setState(() {
        _filteredTasks = _taskList;
      });
    }
  }

  _getTasks() {
    TaskService().getTasks().listen((tasks) {
      setState(() {
        _taskList = tasks;
      });
    });
  }
}
