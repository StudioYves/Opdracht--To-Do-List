const url = "http://localhost:3000";

//GET METHOD
const getData = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response.status);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//POST METHOD
const postTask = async (todo) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log(res.status);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

//DELETE METHOD
const deleteTaskAPI = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
};