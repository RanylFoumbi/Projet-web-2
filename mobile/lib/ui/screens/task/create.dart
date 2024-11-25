import 'package:flutter/material.dart';
import 'package:todoapp/ui/widgets/appbar.dart';
import 'package:todoapp/ui/widgets/button.dart';
import 'package:todoapp/ui/widgets/datetimepicker.dart';
import 'package:todoapp/ui/widgets/textformfield.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class CreateTask extends StatefulWidget {
  final isEditing = false;
  const CreateTask({super.key});

  @override
  State<CreateTask> createState() => _CreateTaskState();
}

class _CreateTaskState extends State<CreateTask> {
  final _formKey = GlobalKey<FormState>();
  final _scrollController = ScrollController();
  final _titleController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _startDateController = TextEditingController();
  final _endDateController = TextEditingController();
  final _startDate = DateTime.now();
  final _lastDate = DateTime.now().add(const Duration(days: 365));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: PreferredSize(
            preferredSize: const Size.fromHeight(appBarHeight),
            child: CustomAppBar(
                title: widget.isEditing
                    ? "Modifier la tâche"
                    : "Créer une tâche")),
        backgroundColor: UIColors.backgroundColor,
        body: Form(
          key: _formKey,
          child: SizedBox(
            child: SingleChildScrollView(
              controller: _scrollController,
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    horizontal: xlSpacer, vertical: xlSpacer),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    const Text(
                      "Titre",
                      style: TextStyle(
                          fontSize: FONT_SIZE_SM,
                          color: UIColors.blackColor,
                          fontWeight: FontWeight.w300),
                    ),
                    const SizedBox(height: xsSpacer),
                    CustomTextFormField(
                      controller: _titleController,
                      keyboardType: TextInputType.text,
                      placeholder: 'Titre de la tâche',
                      validator: (String? value) {
                        if (value!.isEmpty) {
                          return "Le titre de la tâche est requis";
                        }
                        return null;
                      },
                      protected: false,
                      inputFormatters: const [],
                    ),
                    const SizedBox(height: xsSpacer),
                    const Text(
                      "Description",
                      style: TextStyle(
                          fontSize: FONT_SIZE_SM,
                          color: UIColors.blackColor,
                          fontWeight: FontWeight.w300),
                    ),
                    const SizedBox(height: xsSpacer),
                    CustomTextFormField(
                      controller: _descriptionController,
                      keyboardType: TextInputType.text,
                      placeholder: 'Entrer la description de la tâche',
                      validator: (String? value) {
                        if (value!.isEmpty) {
                          return "La description de la tâche est requise";
                        }
                        return null;
                      },
                      protected: false,
                      maxLines: 5,
                      inputFormatters: const [],
                    ),
                    const SizedBox(height: mdSpacer),
                    // const Text(
                    //   "Statut",
                    //   style: TextStyle(
                    //       fontSize: FONT_SIZE_SM,
                    //       color: UIColors.blackColor,
                    //       fontWeight: FontWeight.w300),
                    // ),
                    // const SizedBox(height: xsSpacer),
                    // const SizedBox(height: mdSpacer),
                    const Text(
                      "Date de début",
                      style: TextStyle(
                          fontSize: FONT_SIZE_SM,
                          color: UIColors.blackColor,
                          fontWeight: FontWeight.w300),
                    ),
                    const SizedBox(height: xsSpacer),
                    CustomDateTimePicker(
                      controller: _startDateController,
                      placeholder: 'Date de fin',
                      isDateOnly: false,
                      initialDate: widget.isEditing
                          ? DateTime.parse(_startDateController.text)
                          : _startDate,
                      firstDate: _startDate,
                      lastDate: _lastDate.add(const Duration(days: 365)),
                    ),
                    const SizedBox(height: mdSpacer),
                    const Text(
                      "Date de fin",
                      style: TextStyle(
                          fontSize: FONT_SIZE_SM,
                          color: UIColors.blackColor,
                          fontWeight: FontWeight.w300),
                    ),
                    const SizedBox(height: xsSpacer),
                    CustomDateTimePicker(
                      controller: _endDateController,
                      placeholder: 'Date de fin',
                      isDateOnly: false,
                      initialDate: widget.isEditing
                          ? DateTime.parse(_endDateController.text)
                          : _startDate,
                      firstDate: _startDate,
                      lastDate: _lastDate.add(const Duration(days: 365)),
                    ),
                    const SizedBox(height: xxlSpacer),
                    CustomElevatedButton(
                        text:
                            widget.isEditing ? "Sauvegader" : "Créer la tâche",
                        fill: true,
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {}
                        })
                  ],
                ),
              ),
            ),
          ),
        ));
  }

  clearForm() {
    _titleController.clear();
    _descriptionController.clear();
    _startDateController.clear();
    _endDateController.clear();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    _titleController.dispose();
    _descriptionController.dispose();
    _startDateController.dispose();
    _endDateController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    if (widget.isEditing) {
    } else {
      clearForm();
    }
  }
}
