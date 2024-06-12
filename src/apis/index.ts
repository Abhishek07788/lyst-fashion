export const Allproduct = (input: string) => {
  return fetch(`https://json-server-1.onrender.com/allData?q=${input}`).then(
    (res) => res.json()
  );
};
