export const base_url = "https://api.koolgroupltd.com/api/v1/";

export const GET = async (url ,data) => {
  // console.log("geturl>>>",url)

  return fetch(base_url + url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
    // body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json().then((responseJson) => {
        // console.log("_______________responseJson_", responseJson);
        return responseJson;
      });
    })
    .catch((err) => {
      console.log("GET",url,err);
    });
};
export async function POST(url, data) {

  return fetch(base_url + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json().then((responseJson) => {
        // console.log("_______________responseJson_", responseJson);
        return responseJson;
      });
    })
    .catch((err) => {
      console.log("post",err);
    });
}
