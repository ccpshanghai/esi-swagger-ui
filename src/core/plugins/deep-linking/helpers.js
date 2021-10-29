export const setHash = (value) => {
  if(value) {
    return history.pushState(null, null, `#${value}`)
  } else {
    return window.location.hash = ""
  }
}

export const setTranslate = (value) => {
  let chineseDict = {"Alliance" : "联盟"}
  if (chineseDict[value]){
    return `${value}/${chineseDict[value]}`
  }else{
    return `${value}`
  }
}

