import 'package:flutter/material.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class CustomElevatedButton extends StatelessWidget {
  final String text;
  final bool fill;
  final VoidCallback onPressed;
  const CustomElevatedButton({
    super.key,
    required this.text,
    required this.fill,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
          minimumSize: Size(width, 48),
          backgroundColor: fill ? UIColors.purpleColor : UIColors.whiteColor,
          alignment: Alignment.center,
          foregroundColor: fill ? UIColors.whiteColor : UIColors.purpleColor,
          padding: btnPadding,
          elevation: 0,
          shape: RoundedRectangleBorder(
              borderRadius: btnBorderRaduis,
              side: fill
                  ? BorderSide.none
                  : const BorderSide(color: UIColors.purpleColor, width: 1)),
          side: fill
              ? BorderSide.none
              : const BorderSide(color: UIColors.purpleColor, width: 1),
          textStyle: const TextStyle(
              fontSize: FONT_SIZE_SM, fontWeight: FontWeight.w500)),
      onPressed: onPressed,
      child: Text(text),
    );
  }
}
