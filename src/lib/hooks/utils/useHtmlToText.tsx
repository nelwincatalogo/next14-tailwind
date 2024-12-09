'use client';

const useHtmlToText = () => {
  const convert = (html) => {
    if (!html) {
      return;
    }

    // Create a new temporary element to hold the HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    // Get the text content of the temporary element
    const textContent = tempElement.textContent || tempElement.innerText || '';

    // Remove the temporary element from the DOM
    tempElement.remove();

    return textContent;
  };

  return { convert };
};

export default useHtmlToText;
