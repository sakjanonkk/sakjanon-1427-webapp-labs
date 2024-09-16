function delayedGreeting(name) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`After delaying for ${delay} seconds, Hello ${name}`);
    }, delay * 1000);
  });
}

// Example usage
delayedGreeting('Sakjanon')
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });