export function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function camelCaseToTitleCase(camelCase) {
  return camelCase
    .replace(/([A-Z])/g, ' $1') // Insert a space before each capital letter
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    .replace(/Dao Llc/g, 'DAO LLC') // Special handling for 'DaoLlc'
    .replace(/Ai/g, 'AI'); // Special handling for 'Ai'
}

export function formatString(str) {
  if (str?.length <= 12) {
    // If the string length is less than or equal to 12, return the string as is.
    return str;
  }

  // Extract the first 6 characters
  const firstPart = str?.slice(0, 6);

  // Extract the last 6 characters
  const lastPart = str?.slice(-6);

  // Combine them with ellipses in between
  return `${firstPart}...${lastPart}`;
}
