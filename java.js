function averageOfEvenNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);

    if (evenNumbers.length === 0) {
        return 0; // To avoid division by zero
    }

    const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
    return sum / evenNumbers.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const avg = averageOfEvenNumbers(numbers);
console.log(avg); // Output: 4
function longestWord(words) {
    return words.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
}

// Example usage:
const wordArray = ["apple", "banana", "kiwi", "strawberry"];
const longest = longestWord(wordArray);
console.log(longest); // Output: 'strawberry'
function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return totalPages / books.length;
}

// Example usage:
const books = [
    { title: "Book1", author: "Author1", pages: 100 },
    { title: "Book2", author: "Author2", pages: 150 },
    { title: "Book3", author: "Author3", pages: 120 }
];
const avgPages = averagePages(books);
console.log(avgPages); // Output: 123.3333
function stringFrequency(strings) {
    return strings.reduce((freqObj, str) => {
        freqObj[str] = (freqObj[str] || 0) + 1;
        return freqObj;
    }, {});
}

// Example usage:
const stringArray = ["hello", "world", "hello"];
const frequencyObj = stringFrequency(stringArray);
console.log(frequencyObj);
// Output: { hello: 2, world: 1 }
function countPeopleByCity(people) {
    return people.reduce((cityCount, person) => {
        cityCount[person.city] = (cityCount[person.city] || 0) + 1;
        return cityCount;
    }, {});
}

// Example usage:
const peopleArray = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
];
const cityCount = countPeopleByCity(peopleArray);
console.log(cityCount);
// Output: { "New York": 2, "Chicago": 1 }
