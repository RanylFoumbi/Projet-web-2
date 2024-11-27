import 'package:flutter/material.dart';
import 'package:todoapp/utilities/const/colors.dart';

const double appBarHeight = 70;

const btnBorderRaduis = BorderRadius.all(Radius.circular(6));
const btnPadding = EdgeInsets.symmetric(vertical: 9, horizontal: 16);
const double lgSpacer = 24;
const double mdSpacer = 16;
const double smSpacer = 12;

const double xlSpacer = 32;
const double xsSpacer = 9;
const double xxlSpacer = 48;
const double xxsSpacer = 4;

final List<BoxShadow> customBoxShadow = [
  const BoxShadow(
    color: Color.fromRGBO(139, 126, 126, 0.21),
    offset: Offset(0, 4),
    blurRadius: 8,
  ),
];

final statebgColors = {
  'TODO': UIColors.todobgColor,
  'DOING': UIColors.doingbgColor,
  'DONE': UIColors.donebgColor,
  'CANCELLED': UIColors.cancelledbgColor,
};

final stateBorderColors = {
  'TODO': UIColors.todoBorderColor,
  'DOING': UIColors.doingBorderColor,
  'DONE': UIColors.doneBorderColor,
  'CANCELLED': UIColors.cancelledBorderColor,
};
final Map<String, String> stateLabels = {
  'TODO': 'À faire',
  'DOING': 'En cours',
  'DONE': 'Terminée',
  'CANCELLED': 'Annulée',
};

final stateTextColors = {
  'TODO': UIColors.todoTextColor,
  'DOING': UIColors.doingTextColor,
  'DONE': UIColors.doneTextColor,
  'CANCELLED': UIColors.cancelledTextColor,
};

showsnackbar(BuildContext context, String message, {bool isError = false}) {
  ScaffoldMessenger.of(context).showSnackBar(SnackBar(
    content: Text(message),
    duration: const Duration(seconds: 2),
    backgroundColor: isError ? UIColors.errorColor : UIColors.doneTextColor,
  ));
}

extension StringExtension on String {
  String capitalize() {
    return "${this[0].toUpperCase()}${substring(1)}";
  }
}
