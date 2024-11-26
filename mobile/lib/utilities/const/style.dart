import 'package:flutter/material.dart';

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

extension StringExtension on String {
  String capitalize() {
    return "${this[0].toUpperCase()}${substring(1)}";
  }
}