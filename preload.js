window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['Kiosko1', 'Kiosko2', 'Kiosko3']) {
    let a = 0
    replaceText(`${dependency}`, 'kioscos')
  }
})