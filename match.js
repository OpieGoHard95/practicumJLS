var input = "A string with 7  numbers in it... 42 and 88, 123 and 16, 4 and 22.";
var number = /\b(\d{2})\b/g;
var match;
// Character at is one off for some reason
while (match = number.exec(input))
  print("Found", match[1], "at", match.index);
