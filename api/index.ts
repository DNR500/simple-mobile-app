const urlBase = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
  return fetch(`${urlBase}/posts`).then((res) => res.json());
}

export function getPost(id: number) {
  return fetch(`${urlBase}/posts/${id}`).then((res) => res.json());
}

export function getUser(id: number) {
  return fetch(`${urlBase}/users/${id}`).then((res) => res.json());
}

export function getCommentsForPost(postId: number) {
  return fetch(`${urlBase}/comments?postId=${postId}`).then((res) => res.json());
}

export function deletePost(postId: number) {
  return fetch(`${urlBase}/posts/${postId}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}
