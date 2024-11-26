import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class CustomTextFormField extends StatefulWidget {
  final int? maxLines;
  final bool protected;
  final Widget? prefixIcon;
  final Widget? suffixIcon;
  final String placeholder;
  final TextInputType keyboardType;
  final ValueChanged<String>? onChanged;
  final TextEditingController controller;
  final AutovalidateMode? autovalidateMode;
  final FormFieldValidator<String>? validator;
  final List<TextInputFormatter> inputFormatters;

  const CustomTextFormField({
    super.key,
    this.maxLines,
    this.onChanged,
    this.prefixIcon,
    this.suffixIcon,
    this.autovalidateMode,
    required this.protected, // True for password
    required this.validator,
    required this.controller,
    required this.placeholder,
    required this.keyboardType,
    required this.inputFormatters,
  });

  @override
  State<CustomTextFormField> createState() => _CustomTextFormFieldState();
}

class _CustomTextFormFieldState extends State<CustomTextFormField>
    with TickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  Widget build(BuildContext context) {
    return ScaleTransition(
      scale: _animation,
      child: Container(
        decoration: BoxDecoration(
          color: UIColors.backgroundColor,
          border: Border.all(
            color: UIColors.backgroundColor,
            width: 0.1,
          ),
          borderRadius: btnBorderRaduis,
        ),
        child: TextFormField(
          maxLines: widget.maxLines,
          validator: widget.validator,
          onChanged: widget.onChanged,
          controller: widget.controller,
          keyboardType: widget.keyboardType,
          inputFormatters: widget.inputFormatters,
          cursorColor: UIColors.grayText,
          textAlignVertical: TextAlignVertical.center,
          autovalidateMode:
              widget.autovalidateMode ?? AutovalidateMode.onUserInteraction,
          decoration: InputDecoration(
            suffixIcon: widget.suffixIcon,
            prefixIcon: widget.prefixIcon,
            contentPadding:
                const EdgeInsets.symmetric(horizontal: 16, vertical: 9),
            fillColor: UIColors.backgroundColor,
            hintText: widget.placeholder,
            hintStyle: const TextStyle(
                fontSize: FONT_SIZE_SM,
                color: UIColors.placeholderColor,
                fontWeight: FontWeight.w100),
            focusedBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: UIColors.grayText, width: 1),
                borderRadius: btnBorderRaduis),
            enabledBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: UIColors.grayText, width: 1),
                borderRadius: btnBorderRaduis),
            errorBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: UIColors.errorColor, width: 1),
                borderRadius: btnBorderRaduis),
            border: const OutlineInputBorder(
              borderSide: BorderSide(color: UIColors.grayText, width: 1),
              borderRadius: btnBorderRaduis,
            ),
            errorMaxLines: 2,
            errorStyle: const TextStyle(
              color: UIColors.errorColor,
              fontSize: FONT_SIZE_XS,
              fontWeight: FontWeight.w100,
              overflow: TextOverflow.ellipsis,
            ),
            focusedErrorBorder: const OutlineInputBorder(
                borderSide: BorderSide(color: UIColors.errorColor, width: 1),
                borderRadius: btnBorderRaduis),
          ),
        ),
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
