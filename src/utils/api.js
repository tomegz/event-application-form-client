const url = "https://event-application-form-api-thrrttngir.now.sh";

const postEvent = (route, data) => {
  return fetch(`${url}${route}`, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    mode: "cors"
  }).then((res) => res.json());
}

export default postEvent;