{
  // Problem2
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items
      .filter((item) => item.rating >= 4.0)
      .map((item) => {
        return { title: item.title, rating: item.rating };
      });
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  const result = filterByRating(books);
  console.log(result);
}
