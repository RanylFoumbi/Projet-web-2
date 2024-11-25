import 'package:flutter/material.dart';
import 'package:todoapp/ui/widgets/appbar.dart';
import 'package:todoapp/ui/widgets/textformfield.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/style.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final TextEditingController _searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
          preferredSize: Size.fromHeight(appBarHeight),
          child: CustomAppBar(title: 'TodoApp')),
      backgroundColor: UIColors.backgroundColor,
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(smSpacer),
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: xsSpacer),
              child: CustomTextFormField(
                controller: _searchController,
                keyboardType: TextInputType.text,
                placeholder: 'Rechercher',
                suffixIcon: _searchController.text.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear_rounded),
                        onPressed: () {
                          _searchController.clear();
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
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: UIColors.purpleColor,
        onPressed: () {
          Navigator.of(context).pushNamed('/create-task');
        },
        child: const Icon(Icons.add, color: UIColors.whiteColor),
      ),
    );
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }
}
