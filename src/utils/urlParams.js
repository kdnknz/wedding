// Utility untuk membaca URL parameters

export function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

export function getGuestNameFromUrl() {
  return getUrlParameter('to')
}
