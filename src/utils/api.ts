interface ApiCallProps<T> {
  onError(): void;
  onSuccess(responseData: T): void;
  url: string;
  options?: Object;
}

interface ApiCallPostProps<T> extends ApiCallProps<T> {
  body: Object;
}

const apiCall = async <T>(props: ApiCallProps<T>): Promise<void> => {
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

const get = <T>(props: ApiCallProps<T>) => {
  apiCall(props);
};

const post = <T>(props: ApiCallPostProps<T>) => {
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
