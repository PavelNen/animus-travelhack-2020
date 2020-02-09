export const INITIAL_STATE = {
  userSession: '',
  isLoading: false,
  errorMessage: null,

  events: [],
  eventsIsLoading: false,
  eventsErrorMessage: null,

  filters: {
    min_price: null,
    max_price: null,
    min_date: null,
    max_date: null,
    category_id: null,
  },
  geo: {
    lat: null,
    lon: null,
  }
}
