import FavoriteIcon from '@material-ui/icons/Favorite'
// import FolderIcon from '@material-ui/icons/Folder'
import HomeIcon from '@material-ui/icons/Home'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
import routes from './routes'

export default {
  items: [
    {
      label: 'Главная',
      value: 'home',
      Icon: HomeIcon,
      route: routes.getHome(),
    },
    {
      label: 'Вторая',
      value: 'favorite',
      Icon: FavoriteIcon,
      route: routes.getFavorites(),
    },
    // {
    //   label: 'Третья',
    //   value: 'home',
    //   Icon: LocationOnIcon,
    //   route: routes.getHome()
    // },
    // {
    //   label: 'Четвёртая',
    //   value: 'home',
    //   Icon: FolderIcon,
    //   route: routes.getHome()
    // },
  ],
  routes: {
    home: routes.getHome(),
    favorite: routes.getFavorites(),
  }
}
