interface ApiCallProps {
  onError: Function;
  onSuccess: Function;
  url: string;
  options?: Object;
}

interface ApiCallPostProps extends ApiCallProps {
  body: Object;
}

const apiCall = async (props: ApiCallProps): Promise<void> => {
  const {
    onError,
    onSuccess,
    options,
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

const get = (props: ApiCallProps) => {
  apiCall(props);
};

const post = (props: ApiCallPostProps) => {
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
