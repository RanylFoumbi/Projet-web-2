// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/style.dart';

class CustomDropdown extends StatefulWidget {
  final List<String> items;
  final String initialValue;
  final bool isEditable;
  final ValueChanged<String> onChanged;

  const CustomDropdown({
    super.key,
    required this.items,
    required this.isEditable,
    required this.initialValue,
    required this.onChanged,
  });

  @override
  _CustomDropdownState createState() => _CustomDropdownState();
}

class _CustomDropdownState extends State<CustomDropdown>
    with TickerProviderStateMixin {
  late String selectedValue;
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  Widget build(BuildContext context) {
    return ScaleTransition(
      scale: _animation,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(
          border: Border.all(color: Colors.grey, width: 1),
          borderRadius: BorderRadius.circular(6),
        ),
        child: DropdownButton<String>(
          value: selectedValue,
          underline: const SizedBox(),
          icon: const Icon(Icons.arrow_drop_down),
          isExpanded: true,
          onChanged: (String? newValue) {
            if (widget.isEditable) {
              if (newValue != null) {
                setState(() {
                  selectedValue = newValue;
                });
                widget.onChanged(newValue);
              }
            }
          },
          items: widget.isEditable
              ? widget.items.map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(stateLabels[value]!),
                        if (value == selectedValue && widget.isEditable == true)
                          Icon(Icons.check_circle_sharp,
                              color: stateColors[value], size: 30),
                      ],
                    ),
                  );
                }).toList()
              : widget.items
                  .where((String value) => value == selectedValue)
                  .map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(value),
                        const Icon(Icons.check_circle_sharp,
                            color: UIColors.purpleDegradeColor, size: 30),
                      ],
                    ),
                  );
                }).toList(),
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

    selectedValue = widget.initialValue;
  }
}
