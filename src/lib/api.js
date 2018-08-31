export const toJSON = response =>
  response.text().then((text) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      return text;
    }
  });

export const get = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await toJSON(response);
  return json;
};

export default get;
