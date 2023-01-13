import About from '../pages/About'
import Home from '../pages/Home'
import Connet from '../pages/Connet'
import News from '../pages/News'
import Shopping from '../pages/Shopping'

const router=[
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'Connet', element: <Connet /> },
    { path: 'News', element: <News /> },
    { path: 'Shopping', element: <Shopping /> },
      // 重定向
    { path: 'home', redirectTo: '/' },
    // 404找不到
    // { path: '*', element: <NotFound /> }
]

export default  router