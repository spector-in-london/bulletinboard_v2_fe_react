const apiCall = async (props) => {
  const {
    onError,
    onSuccess,
    options = null,
    url,
  } = props;

  try {
    const apiRes = await fetch(url, options);
    const res = await apiRes.json();

    if (res.status === 'success') {
      onSuccess(res.data);
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    onError();
  }
};

const get = (props) => {
  apiCall(props);
};

const post = (props) => {
  const options = {
    method: 'post',
    body: JSON.stringify(props.body),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  };

  apiCall({ ...props, options });
};

export default {
  get,
  post,
};
