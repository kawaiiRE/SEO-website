export const initGA = () => {
  window.dataLayer = window.dataLayer || []

  // Load Google Analytics script
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`
  script.async = true
  document.head.appendChild(script)

  function gtag () {
    window.dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', process.env.REACT_APP_GA_TRACKING_ID) // Use the GA tracking ID
}
