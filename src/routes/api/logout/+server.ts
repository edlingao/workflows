import WorkflowsResponseApi from '$lib/server/response';

export const DELETE = () => {
  return WorkflowsResponseApi({
    cookie: {
      key: 'auth-x',
      value: '',
    }
  })
}

