const setTitle = (value) => {
  document.title = value || 'Human';
};

const setDescription = (value) => {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', value || 'Human');
  } else {
    const head = document.getElementsByTagName('head')[0];
    const _meta = document.createElement('meta');

    _meta.setAttribute('name', 'description');
    _meta.setAttribute('content', value || 'Human');
    head.appendChild(_meta);
  }
};

export default ({ title, description }) => {
  setTitle(title);
  setDescription(description);
};
