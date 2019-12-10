export const fetchData = <T>(url: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch("https://cors-anywhere.herokuapp.com/" + url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};
