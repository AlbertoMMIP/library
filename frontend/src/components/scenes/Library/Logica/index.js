export const filterProjects = (value, array) => {
  const projectsResult = value
    ? array.original.filter((book) => book.title.toUpperCase()
      .includes(value.toUpperCase())
      || book.author.toUpperCase()
        .includes(value.toUpperCase()))
    : array.original;
  return { filter: projectsResult, original: array.original };
};