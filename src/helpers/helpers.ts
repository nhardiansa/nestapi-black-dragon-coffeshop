export function CustomException({ message, status = 400, errors }) {
  const error: any = new Error(message);
  error.code = status;
  error.errors = errors;

  throw error;
}
