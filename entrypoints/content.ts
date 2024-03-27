export default defineContentScript({
  matches: ['https://intra.epitech.eu/*', 'https://my.epitech.eu/*'],
  main() {
    browser.runtime.onMessage.addListener((message, _, sendResponse) => {
      if ((message.action = 'getLocalStorage')) {
        const data = window.localStorage.getItem(message.key)

        sendResponse({ data })
      }
    })
  }
})
