const elSiteHeader = document.querySelector('.site-header')
const elSiteHeaderSitenav = elSiteHeader.querySelector('.site-header-actions')
const elSiteHeaderSitenavToggle = elSiteHeader.querySelector('.header-menu-toggle-button')
const elSiteNavList = elSiteHeader.querySelector('.sitenav-list')


if(elSiteHeaderSitenavToggle) {
  elSiteHeaderSitenavToggle.addEventListener('click', () => {
    elSiteHeader.classList.toggle('site-header-open')

    if(document.body.style.paddingTop) {
      document.body.style.paddingTop = ''
    } else {
      document.body.style.paddingTop = `${elSiteHeader.offsetHeight}px`
    }

    // If it has many child items in the navlist
    if(elSiteNavList.children.length > 15) {
      elSiteHeaderSitenav.classList.toggle('many-child-item')
    }
  })
}
