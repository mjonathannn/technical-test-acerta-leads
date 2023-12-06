const isRemoteHost = (): boolean => {
  if (window.location.hostname === "localhost") return false

  return true
}

export default isRemoteHost
