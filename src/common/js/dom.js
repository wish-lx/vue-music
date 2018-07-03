// 给Dom加上某个className,
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
   }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')  
}
// 判断dom是否有某个className
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|s)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  }else {
    return el.getAttribute(name)
  }
}