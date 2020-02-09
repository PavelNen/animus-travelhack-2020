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
const getEventsList = ({
  min_price = undefined,
  max_price = undefined,
  min_date = undefined,
  max_date = undefined,
  category_id = undefined
}) => ponaminaluAPI.post(
  '/v4/events/list',
  {
    min_price,
    max_price,
    max_date,
    min_date,
    category_id,
  },
  {
    params: {
      session: 'moscowhack872364',
      first_only: true,
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
