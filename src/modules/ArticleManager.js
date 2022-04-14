export const getAllArticles = () => {
    return fetch(`http://localhost:8088/articles?_sort=timestamp&_order=desc`)
    .then(res => res.json())
}

export const deleteArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
    method: "DELETE",
  }).then(result => result.json())
}

export const addArticle = (newArticle) => {
  return fetch("http://localhost:8088/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle)
  }).then(response => response.json())
}