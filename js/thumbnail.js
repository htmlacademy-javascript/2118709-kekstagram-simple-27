const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPhotoThumbnail = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) =>{
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;

    pictureFragment.append(photoElement);
  });
  pictureList.append(pictureFragment);
};

export{renderPhotoThumbnail};
