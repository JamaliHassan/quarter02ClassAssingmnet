const serverData = async () => {
  const response = await fetch(" https://simple-books-api.glitch.me/books/")
  const data = response.json();
  return data
};
export default serverData;
