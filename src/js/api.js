const { normalize } = require('@geolonia/normalize-japanese-addresses')

export const getLatLng = (str, callback, errorCallback = () => {}) => {
  try {
    normalize(str).then(json => {
      if (json.level > 0) {
        callback(json)
      } else {
        const e = new Error('見つかりませんでした。住所を修正して、もう一度お試しください!')
        errorCallback(e)
      }
    }).catch(() => {
      const e = new Error('見つかりませんでした。住所を修正して、もう一度お試しください。')
      errorCallback(e)
    })
  } catch (e) {
    errorCallback(e)
  }
}

if (typeof window !== 'undefined') {
  window.getLatLng = getLatLng
}

export const getLatLngArray = async(arrs, callback, errorCallback = () => {}) => {
    let reArr = [];

    for (let i = 0; i < arrs.length; i++){
        try {
            await normalize(arrs[i].PickupPlace).then(json => {
              if (json.level > 0) {
                //   console.log(json)
                console.log(i)
                reArr.push(json)
                // console.log(reArr)
                // reArr = [...reArr, ...json];
                // console.log(reArr)
                // callback(reArr)
                if (i === (arrs.length - 1)){
                    // console.log(reArr)
                    callback(reArr)
                }
              } else {
                const e = new Error('見つかりませんでした。住所を修正して、もう一度お試しください!')
                errorCallback(e)
              }
            }).catch(() => {
              const e = new Error('見つかりませんでした。住所を修正して、もう一度お試しください。')
              errorCallback(e)
            })
          } catch (e) {
            errorCallback(e)
          }
    }
}
  
  if (typeof window !== 'undefined') {
    window.getLatLngArray = getLatLngArray
  }