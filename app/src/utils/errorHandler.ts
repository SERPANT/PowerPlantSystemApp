import notificationUtils from './notification';

interface ApiError {
  response: {
    data: { error: { details: Array<{ message: string }> } };
  };
}

/**
 * Display error as a notification
 *
 * @param err : Error object
 */
export default function handleError(err: any) {
  const errorObj = err as ApiError;

  const errorDetail = errorObj?.response?.data?.error?.details;

  const message = errorDetail
    ? errorDetail[0]?.message
    : 'Something went wrong';

  notificationUtils.error(message);
}
