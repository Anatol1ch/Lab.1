/* var.6 task 114 */

function longestCommonWord(sentence1, sentence2) {
  // розбиваємо речення на масиви зі слів
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");

  // створюємо пустий масив для загальних слів
  const commonWords = [];

  // перебираємо всі слова з першого речення
  for (let i = 0; i < words1.length; i++) {
    const word1 = words1[i];
    // перевіряємо, чи є це слово в другому реченні
    if (words2.includes(word1)) {
      // якщо є, додаємо його в масив загальних слів
      commonWords.push(word1);
    }
  }

  // знаходимо найдлініше слово в масиві загальний слів
  let longestWord = "";
  for (let i = 0; i < commonWords.length; i++) {
    const word = commonWords[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Приклад використання
const sentence1 = "Слава Україна! Героям Слава!";
const sentence2 = "Слава Нації! Смерть ворогам! ";
const commonWord = longestCommonWord(sentence1, sentence2);
console.log(commonWord); // "Слава"
