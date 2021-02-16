// import Keycloak from 'keycloak-js'

// let initOptions = {
//     url: 'http://127.0.0.1:8080/auth',
//     realm: 'test',
//     clientId: 'account',
//     //onLoad: 'login-required'
//   }

//   const keycloak = new Keycloak({ initOptions })

//   export default function({store, redirect}) {
//       if (keycloak.authenticated) return true
  
//       return keycloak
//           .init({
//               // onLoad: 'login-required',
//               // checkLoginIframe: true,
//               // checkLoginIframeInterval: 5
//           })
//           .success(authenticated => {})
//           .error(function() {
//               alert('failed to initialize')
//       })
//   }