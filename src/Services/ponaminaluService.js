import { ponaminaluAPI } from './PonaminaluAPI'

const checkUserSession = () => {
  const userSession = localStorage.getItem('user_session')
  if (!userSession) {
    userSessionGenerate()
      .then((res) => {
        localStorage.setItem('user_session', res.data.message)
      })
      .catch((e) => {
        console.error(e)
      })
  }
}

const userSessionGenerate = () => ponaminaluAPI.get('/v4/users/session/generate')

const getCategoriesList = () => ponaminaluAPI.get('/v4/categories/list')

/**
 *
 * @param min_price
 * @param max_price
 * @param min_date
 * @param max_date
 * @param category_id
 * @returns {Promise<AxiosResponse<T>>}
 */
const getEventsList = ({ min_price, max_price, min_date, max_date, category_id }) => ponaminaluAPI.get(
  '/v4/events/list',
  {
    params: {
      session: 123,
      first_only: true,
      min_price,
      max_price,
      max_date,
      min_date,
      category_id,
    }
  }
)
  .then((res) => {
    const data = res.data
    console.log(data.message)
    return (data.message)
  })

const getImage = (maxX, maxY, image) => `https://media.ponominalu.ru/i/${maxX}x${maxY}/${image}`

const getSubEvent = () => ponaminaluAPI.get('v4/subevents/get')

const getFullEventDescription = () => ponaminaluAPI.get('v4/subevents/description/get')

export const ponaminaluService = {
  checkUserSession,
  getCategoriesList,
  getEventsList,
  getSubEvent,
  getImage,
  getFullEventDescription,
}
