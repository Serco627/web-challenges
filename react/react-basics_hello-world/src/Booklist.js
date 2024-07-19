// Definition der BookList Funktion innerhalb von App
export default function BookList() {
  const books = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "Sercolos Journey",
      author: "Sercan",
      year: 2024,
    },
  ];

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        // Verwendung der Book Funktion innerhalb von BookList
        <Book title={book.title} author={book.author} year={book.year} />
      ))}
    </div>
  );
}
