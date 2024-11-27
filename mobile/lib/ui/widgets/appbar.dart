import 'package:flutter/material.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

// ignore: must_be_immutable
class CustomAppBar extends StatelessWidget {
  final String title;
  bool isHome = false;
  final VoidCallback? onTapped;
  CustomAppBar(
      {super.key, required this.title, required this.isHome, this.onTapped});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        AppBar(
          backgroundColor: UIColors.backgroundColor,
          title: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                title.capitalize(),
                style: const TextStyle(
                    color: UIColors.blackText,
                    fontSize: FONT_SIZE_MD,
                    fontWeight: FontWeight.bold),
              ),
            ],
          ),
          automaticallyImplyLeading: isHome ? false : true,
          elevation: 0.5,
        ),
      ],
    );
  }
}
