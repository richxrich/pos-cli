const url = require('url');

const fetchDirectPath = (data) => {
  for(const user of data.users) {
    for(const profile of user.profiles) {
      fetchDirectPathForModel(profile);
    }
  }
  for(const model of data.models) {
    fetchDirectPathForModel(model);
  }

  for (const transactable of data.transactables) {
    fetchDirectPathForModel(transactable);
  }
};

const fetchDirectPathForModel = (model) => {
  for(const image of model.images) {
    fetchDirectPathForImage(image);
  }
  for(const attachment of model.attachments) {
    fetchDirectPathForAttachment(attachment);
  }
};

const fetchDirectPathForImage = (file) => {
  url.parse(file.url);
  file.direct_path = url
    .parse(file.url)
    .pathname
    .replace(/\/instances\/\d+\/uploads\/images\/custom_image\/image/, 'images')
    .replace(/\/transformed_/, '/');
  delete file['url'];
};

const fetchDirectPathForAttachment = (file) => {
  url.parse(file.url);
  file.direct_path = url
    .parse(file.url)
    .pathname
    .replace(/\/(\w|-)+\/instances\/\d+\/uploads\/attachments\/custom_attachment\/file/, 'files');
  delete file['url'];
};

module.exports = fetchDirectPath;
