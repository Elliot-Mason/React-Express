const { readFileSync } = require('fs');

let loaddata = () => {
  try {
    const jsonDataText = readFileSync('data.json', 'utf-8');
    const trimmedText = jsonDataText.replace('var clientData =', '');

    const parsedData = JSON.parse(trimmedText);

    return parsedData;
  } catch (error) {
    console.error('Error reading, parsing, or trimming JSON:', error);
    return null; // You might want to handle this error case accordingly
  }
};

module.exports = { loaddata };
