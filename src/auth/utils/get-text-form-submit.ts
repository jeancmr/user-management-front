export const getTextFormSubmit = (isLoading: boolean, isLogin: boolean) => {
  let text = '';

  if (isLoading && isLogin) text = 'Signin in...';
  if (isLoading && !isLogin) text = 'Creating account...';
  if (!isLoading && isLogin) text = 'Sign In';
  if (!isLoading && !isLogin) text = 'Create Account';

  return text;
};
