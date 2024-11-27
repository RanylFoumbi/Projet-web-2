// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

class CustomDateTimePicker extends StatefulWidget {
  final TextEditingController controller;
  final String placeholder;
  final bool isDateOnly;
  final DateTime? initialDate;
  final DateTime? firstDate;
  final DateTime? lastDate;
  final ValueChanged<DateTime>? onDateTimeChanged;

  const CustomDateTimePicker({
    super.key,
    required this.controller,
    required this.placeholder,
    this.isDateOnly = false,
    this.initialDate,
    this.firstDate,
    this.lastDate,
    this.onDateTimeChanged,
  });

  @override
  _CustomDateTimePickerState createState() => _CustomDateTimePickerState();
}

class _CustomDateTimePickerState extends State<CustomDateTimePicker>
    with TickerProviderStateMixin {
  late DateTime _selectedDateTime;
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
            color: UIColors.grayText,
            width: 0.1,
          ),
          borderRadius: btnBorderRaduis,
        ),
        child: TextFormField(
          controller: widget.controller,
          readOnly: true,
          onTap: _showDateTimePicker,
          decoration: InputDecoration(
            contentPadding: btnPadding,
            fillColor: UIColors.backgroundColor,
            hintText: widget.placeholder,
            hintStyle: const TextStyle(
              fontSize: FONT_SIZE_SM,
              color: UIColors.placeholderColor,
              fontWeight: FontWeight.w100,
            ),
            suffixIcon: Icon(
              widget.isDateOnly ? Icons.calendar_today : Icons.calendar_month,
              color: UIColors.grayText,
              size: 20,
            ),
            focusedBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: UIColors.grayText, width: 1),
              borderRadius: btnBorderRaduis,
            ),
            enabledBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: UIColors.grayText, width: 1),
              borderRadius: btnBorderRaduis,
            ),
            border: const OutlineInputBorder(
              borderSide: BorderSide(color: UIColors.grayText, width: 1),
              borderRadius: btnBorderRaduis,
            ),
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
    _selectedDateTime = widget.initialDate ?? DateTime.now();
    _updateControllerText();
  }

  Future<void> _showDateTimePicker() async {
    final DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: _selectedDateTime,
      firstDate: widget.firstDate ?? DateTime(2000),
      lastDate: widget.lastDate ?? DateTime(2101),
      builder: (context, child) => Theme(
        data: ThemeData.light().copyWith(
          colorScheme: const ColorScheme.light(
            primary: UIColors.purpleColor,
            onPrimary: UIColors.whiteColor,
            surface: UIColors.backgroundColor,
            onSurface: UIColors.purpleColor,
          ),
          dialogBackgroundColor: UIColors.backgroundColor,
        ),
        child: child!,
      ),
    );

    if (pickedDate != null) {
      if (widget.isDateOnly) {
        setState(() {
          _selectedDateTime = pickedDate;
          _updateControllerText();
          widget.onDateTimeChanged?.call(_selectedDateTime);
        });
        return;
      }

      // Pick time if date and time are required
      final TimeOfDay? pickedTime = await showTimePicker(
        context: context,
        initialTime: TimeOfDay.fromDateTime(_selectedDateTime),
        builder: (context, child) => Theme(
          data: ThemeData.light().copyWith(
            colorScheme: const ColorScheme.light(
              primary: UIColors.purpleColor,
              onPrimary: Colors.white,
              surface: UIColors.backgroundColor,
              onSurface: UIColors.grayText,
            ),
            dialogBackgroundColor: UIColors.backgroundColor,
          ),
          child: child!,
        ),
      );

      if (pickedTime != null) {
        setState(() {
          _selectedDateTime = DateTime(pickedDate.year, pickedDate.month,
              pickedDate.day, pickedTime.hour, pickedTime.minute);
          _updateControllerText();
          widget.onDateTimeChanged?.call(_selectedDateTime);
        });
      }
    }
  }

  void _updateControllerText() {
    setState(() {
      if (widget.isDateOnly) {
        widget.controller.text =
            DateFormat('yyyy-MM-dd').format(_selectedDateTime);
      } else {
        widget.controller.text =
            DateFormat('yyyy-MM-dd HH:mm').format(_selectedDateTime);
      }
    });
  }
}
