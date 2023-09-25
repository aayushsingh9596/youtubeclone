const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

export const generateRandomComment = () => {
  const usernames = [
    'Aman',
    'Akash',
    'Raman',
    'Paras',
    'Kapil',
    'Suresh',
    'Ram',
    'Shyaam',
    'John Doe',
    'Hero'
    // Add more usernames here
  ];

  const images = [
    'https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/4.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/5.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/6.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/7.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/8.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/9.jpg',
    'https://xsgames.co/randomusers/assets/avatars/pixel/10.jpg'
  ];

  const comments = [
    'Great video!',
    'I enjoyed this.',
    'Awesome content!',
    'Keep it up!',
    'Very informative.',
    'Thanks for sharing!',
    'Interesting stuff.',
    'Nice work!',
    'Impressive!',
    'Marvellous'
    // Add more comments here
  ];

  const randomUsername = getRandomItem(usernames);
  const randomImage = getRandomItem(images);
  const randomComment = getRandomItem(comments);

  const comment = {
    username: randomUsername,
    imageUrl: randomImage,
    content: randomComment,
  };

  return comment;
};

// Example usage
// const randomComment = generateRandomComment();
// console.log(randomComment);