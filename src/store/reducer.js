export function reducer(state, {type, payload}) {
  switch (type) {
    case 'SET_CATALOG':
      return {...state, catalog: payload.data, loading: false};
    case 'SET_CATEGORY':
      return {...state, category: payload.data, loading: false};
    case 'SET_LOADING':
      return {...state, loading: payload.isLoading};
    default:
      return state;
  }
}