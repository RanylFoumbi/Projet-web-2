import 'package:flutter/material.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class CustomElevatedButton extends StatefulWidget {
  final String text;
  final bool fill;
  final VoidCallback onPressed;

  const CustomElevatedButton(
      {super.key,
      required this.text,
      required this.fill,
      required this.onPressed});

  @override
  State<CustomElevatedButton> createState() => _CustomElevatedButtonState();
}

class _CustomElevatedButtonState extends State<CustomElevatedButton>
    with TickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return ScaleTransition(
      scale: _animation,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
            minimumSize: Size(width, 48),
            backgroundColor:
                widget.fill ? UIColors.purpleColor : UIColors.whiteColor,
            alignment: Alignment.center,
            foregroundColor:
                widget.fill ? UIColors.whiteColor : UIColors.purpleColor,
            padding: btnPadding,
            elevation: 0,
            shape: RoundedRectangleBorder(
                borderRadius: btnBorderRaduis,
                side: widget.fill
                    ? BorderSide.none
                    : const BorderSide(color: UIColors.purpleColor, width: 1)),
            side: widget.fill
                ? BorderSide.none
                : const BorderSide(color: UIColors.purpleColor, width: 1),
            textStyle: const TextStyle(
                fontSize: FONT_SIZE_SM, fontWeight: FontWeight.w500)),
        onPressed: widget.onPressed,
        child: Text(widget.text),
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.linearToEaseOut,
    );

    _controller.forward();
  }
}
