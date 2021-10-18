import axios from 'axios'
import * as singleSpa from 'single-spa'

const runScript = (url) => {
  return new Promise(((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  }))
}

const getManifest = (url, bundle) => new Promise(async (resolve) => {
  const { data } = await axios.get(url)
  const { entrypoints, publicPath } = data
  const assets = entrypoints[bundle].assets
  for (let i = 0; i < assets.length; i++) {
    await runScript(publicPath + assets[i]).then(() => {
      if (i === assets.length - 1) {
        resolve()
      }
    })
  }
})

singleSpa.registerApplication(
  'singleDemo',
  async () => {
    let singleVue = null;
    await getManifest(' /spa/manifest.json', 'app').then(() => {
      singleVue = window.singleVue
    });
    return singleVue
  },
  location => location.pathname.startsWith('/vue')
)

singleSpa.start()
