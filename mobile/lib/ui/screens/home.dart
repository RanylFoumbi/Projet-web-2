import 'package:flutter/material.dart';
import 'package:todoapp/models/task.dart';
import 'package:todoapp/ui/screens/task/create.dart';
import 'package:todoapp/ui/widgets/appbar.dart';
import 'package:todoapp/ui/widgets/task.dart';
import 'package:todoapp/ui/widgets/textformfield.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/style.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State createState() => _HomeState();
}

class _HomeState extends State {
  final TextEditingController _searchController = TextEditingController();
  List _filteredTasks = taskList;
  final Set<String> _selectedTaskIds = {};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:  PreferredSize(
        preferredSize: const Size.fromHeight(appBarHeight),
        child: CustomAppBar(title: 'TodoApp', isHome: true),
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
              validator: (value) {
                return null;
              },
              protected: false,
              inputFormatters: const [],
            ),
          ),
          const SizedBox(height: smSpacer),
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.symmetric(horizontal: xsSpacer),
              itemCount: _filteredTasks.length,
              itemBuilder: (BuildContext context, int index) {
                final task = _filteredTasks[index];
                final isSelected = _selectedTaskIds.contains(task.id);

                return TaskCard(
                  task: task,
                  isSelected: isSelected,
                  onSelect: (bool? isSelected) {
                    setState(() {
                      if (isSelected!) {
                        _selectedTaskIds.add(task.id);
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
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 3 / 2,
                crossAxisSpacing: xsSpacer,
                mainAxisSpacing: xsSpacer,
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Delete Button
          if (_selectedTaskIds.isNotEmpty)
            FloatingActionButton(
              heroTag: 'delete',
              backgroundColor: UIColors.errorColor,
              onPressed: _deleteSelectedTasks,
              child: const Icon(Icons.delete, color: UIColors.whiteColor),
            ),
          const SizedBox(height: smSpacer),
          // Add Task Button
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

  void _deleteSelectedTasks() {
    setState(() {
      taskList
          .removeWhere((TaskModel task) => _selectedTaskIds.contains(task.id));
      _filteredTasks = taskList;
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
    setState(() {
      _filteredTasks = taskList.where((task) {
        return task.title.toLowerCase().contains(query.toLowerCase());
      }).toList();
    });
  }
}
