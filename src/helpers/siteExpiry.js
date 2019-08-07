let siteExpiry = (name, dispatch, actionAuthStatus) => {
  let getTocken = () => {
    sessionStorage.removeItem(name + 'auth');
    sessionStorage.removeItem('auth-allow');

    const action = {
      authStatus: "The time of session is over",
      authWindowVision: false,
    };
    dispatch(actionAuthStatus(action));
  };

  let exitTimer = setTimeout(getTocken, 3600000);
  let refreshTimer = () => {
    clearTimeout(exitTimer);
    exitTimer = setTimeout(getTocken, 3600000);
  }

  window.onclick = () => {
    refreshTimer()
  }

  window.addEventListener('click', () => {
    refreshTimer()
  });

  window.addEventListener('keydown', () => {
    refreshTimer()
  });

  window.addEventListener('focus', () => {
    refreshTimer()
  });

  window.addEventListener('blur', () => {
    refreshTimer()
  });
}

export default siteExpiry;
