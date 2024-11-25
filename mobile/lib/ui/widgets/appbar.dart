import 'package:flutter/material.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class CustomAppBar extends StatelessWidget {
  final String title;
  final bool isHome = false;
  final VoidCallback? onTapped;
  const CustomAppBar({super.key, required this.title, this.onTapped});

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
              isHome
                  ? const SizedBox()
                  : const Icon(
                      Icons.refresh,
                      color: UIColors.blackColor,
                      size: 20,
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
