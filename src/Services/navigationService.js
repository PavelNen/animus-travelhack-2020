let navigator

function setTopLevelNavigator (history) {
  navigator = history
}

function navigate (route) {
  navigator.push(route)
}

function goBack () {
  navigator.go(-1)
}

function redirect (route) {
  navigator.replace(route)
}

export const navigationService = {
  setTopLevelNavigator,
  navigate,
  redirect,
  goBack,
}
