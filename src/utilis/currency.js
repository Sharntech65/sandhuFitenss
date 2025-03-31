export function formatNumber(num) {
  // Check if the number is less than 1000
  if (num < 1000) {
    return num.toString();
  }
  // Check if the number is less than 1 million (1000000)
  else if (num >= 1000 && num < 1000000) {
    // Convert to "k" format
    return Math.floor((num / 1000).toFixed(2).replace(/\.0$/, '')) + 'K';
  }
  // Check if the number is less than 1 billion (1000000000)
  else if (num >= 1000000 && num < 1000000000) {
    // Convert to "M" format
    return Math.floor((num / 1000000).toFixed(2).replace(/\.0$/, '')) + 'M';
  }
  // Check if the number is less than 1 trillion (1000000000000)
  else if (num >= 1000000000 && num < 1000000000000) {
    // Convert to "B" format
    return Math.floor((num / 1000000000).toFixed(2).replace(/\.0$/, '')) + 'B';
  }
  // Check if the number is 1 trillion or greater
  else {
    // Convert to "T" format
    return (
      Math.floor((num / 1000000000000).toFixed(2).replace(/\.0$/, '')) + 'T'
    );
  }
}
