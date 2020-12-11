const setLoadingClassname = isLoading => {
  if (isLoading) {
    return 'is-loading';
  }
  return null;
};

export default setLoadingClassname;
