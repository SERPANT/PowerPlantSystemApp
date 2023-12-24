export const buildQueryString = (
  queryString: string,
  filterName: string,
  filterValue: string | null | undefined | number
) => {
  if (!filterValue) return queryString;

  if (queryString) {
    queryString = queryString + `&${filterName}=${filterValue}`;
  }

  if (!queryString) {
    queryString = queryString + `${filterName}=${filterValue}`;
  }

  return queryString;
};
