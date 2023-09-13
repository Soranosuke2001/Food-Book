import { async } from "regenerator-runtime";

import { TIMEOUT_SEC } from "./config";

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}

export async function getJSON(url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function sendJSON(url, recipe) {
  try {
    const response = await Promise.race([
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }),
      timeout(TIMEOUT_SEC),
    ]);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (error) {
    throw error;
  }
}
