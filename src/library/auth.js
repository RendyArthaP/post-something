import netlifyIdentity from 'netlify-identity-widget';

export function init(callback) {
  netlifyIdentity.on('init', user => {
    callback(user)
  })
  netlifyIdentity.init()
}

export function loginButton() {
  netlifyIdentity.open()
}