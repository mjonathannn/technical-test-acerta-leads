const isLocalhost = (): boolean => {
  if (window.location.hostname === "localhost") return true

  return false
}

export default isLocalhost
