import MobileMenu from './modules/MobileMenu'

// import the main style
import '../styles/styles.css'


let mobileMenu = new MobileMenu();

// accept hot reload by webpack server
if (module.hot) {
    module.hot.accept()
}
