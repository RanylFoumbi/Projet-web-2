import 'package:flutter/material.dart';
import 'package:intl/intl.dart'; // For date formatting
import 'package:todoapp/models/task.dart';
import 'package:todoapp/utilities/const/colors.dart';
import 'package:todoapp/utilities/const/fonts.dart';
import 'package:todoapp/utilities/const/style.dart';

Future<void> showTaskDetailsBottomSheet(
    BuildContext context, TaskModel task) async {
  try {
    return showModalBottomSheet<void>(
      context: context,
      isDismissible: true,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (BuildContext context) { 
        return DraggableScrollableSheet(
          initialChildSize: 0.4,
          minChildSize: 0.4,
          maxChildSize: 0.9,
          builder: (_, controller) {
            return TaskDetails(task: task);
          },
        );
      },
    );
  } catch (e, stackTrace) {
    debugPrint('Error showing bottom sheet: $e\n$stackTrace');
  }
}

class TaskDetails extends StatefulWidget {
  final TaskModel task;

  const TaskDetails({super.key, required this.task});

  @override
  _TaskDetailsState createState() => _TaskDetailsState();
}

class _TaskDetailsState extends State<TaskDetails> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: UIColors.backgroundColor,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(15),
          topRight: Radius.circular(15),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          _buildHeader(),
          const SizedBox(height: 20),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildStateLabel(),
                const SizedBox(height: 8),
                Text(
                  widget.task.description,
                  style: const TextStyle(
                    color: UIColors.blackText,
                    fontSize: FONT_SIZE_MD,
                  ),
                  overflow: TextOverflow.ellipsis,
                  maxLines: 5,
                ),
                const SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    _buildDetail(
                        'Date de début', _formatDate(widget.task.startDate)),
                    _buildDetail('Échéance', _formatDate(widget.task.endDate)),
                  ],
                )
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDetail(String label, String value) {
    return Container(
      alignment: Alignment.bottomCenter,
      height: 70,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(
              color: UIColors.blackText,
              fontWeight: FontWeight.bold,
              fontSize: FONT_SIZE_SM,
            ),
          ),
          const SizedBox(height: 5),
          Container(
            padding: const EdgeInsets.all(2),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(4),
              color: _endDatePassed()
                  ? UIColors.cancelledBorderColor
                  : UIColors.backgroundColor,
              border: Border.all(
                color: _endDatePassed()
                    ? UIColors.cancelledBorderColor
                    : UIColors.grayText,
              ),
            ),
            child: Row(
              children: [
                Icon(
                  Icons.access_time_rounded,
                  color: _endDatePassed()
                      ? UIColors.cancelledTextColor
                      : UIColors.grayText,
                  size: 14,
                ),
                Text(
                  ' $value',
                  style: TextStyle(
                    color: _endDatePassed()
                        ? UIColors.cancelledTextColor
                        : UIColors.grayText,
                    fontSize: FONT_SIZE_SM,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // Build Header
  Widget _buildHeader() {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 60,
      decoration: const BoxDecoration(
        color: UIColors.backgroundColor,
        border: Border(
          bottom: BorderSide(color: UIColors.grayText, width: 1),
        ),
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(15),
          topRight: Radius.circular(15),
        ),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const SizedBox(width: 50),
          Flexible(
            child: Text(
              widget.task.title,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: FONT_SIZE_XL,
                color: UIColors.blackText,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.clear, size: 24, color: UIColors.blackText),
            onPressed: () => Navigator.of(context).pop(),
          ),
        ],
      ),
    );
  }

  Widget _buildStateLabel() {
    final state = widget.task.state;

    return Container(
      padding: const EdgeInsets.all(2),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(4),
        color: statebgColors[state] ?? UIColors.backgroundColor,
        border: Border.all(
          color: stateBorderColors[state] ?? UIColors.grayText,
        ),
      ),
      child: Text(
        stateLabels[state] ?? 'Unknown State',
        style: TextStyle(
          fontSize: FONT_SIZE_MD,
          color: stateTextColors[state] ?? UIColors.grayText,
        ),
      ),
    );
  }

  bool _endDatePassed() {
    return widget.task.endDate.isBefore(DateTime.now());
  }

  String _formatDate(DateTime date) {
    return DateFormat('dd-MM-yyyy HH:mm').format(date);
  }
}
