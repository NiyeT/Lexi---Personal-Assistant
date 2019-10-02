const splashScreenAnimation=c(
  "img",
  {
    id:"splash-screen-animation",
    src:"/src/pages/splash-screen/images/sun.png",
    style:{
      height:"25vh",
      width:"25vh",
      animation:"pulse 3s infinite"
    }
  }
)

const splashScreenMessage=c(
  'span',
  {
    id:"splash-screen-message",
    style:{
      margin:'10px'
    }
  },
  Beacon.watch('/src/pages/splash-screen/splash-screen.json','loadingText',function(change){document.querySelector("#splash-screen-message").textContent=change})
)

const splashScreenContainer=c(
  'div',
  {
    className:'centers',
    style:{
      'text-align':'center',
      display:'grid',
    },
    children:[
      splashScreenAnimation,splashScreenMessage
    ]
  }
)

const splashScreenWrapper=c(
  "div",
  {
    id:"splash-screen-wrapper",
    className:"center",
    style:{
      height:"100vh",
      width:"100vw",
      backgroundColor:"orange",
      'text-align':'center'
    },
    children:[
      splashScreenContainer
    ]
  }
)

class SplashScreen extends Component {
  render() {
    return splashScreenWrapper
  }
}

export default SplashScreen;
