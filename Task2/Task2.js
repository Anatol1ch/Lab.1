/* var.6 task 41 */

str = "abc";
if (str.length > 10) {
  str = str.slice(0, 6);
} else {
  str = str.padEnd(12, "o");
}
console.log(str);
