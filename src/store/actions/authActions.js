export const UserSignIn = (user) => {
  return {
    type: "LOGIN_SUCCEEDED",
    user,
  };
};

export const NotVerified = (user) => {
  return {
    type: "NOT_VERIFIED",
    user,
  };
};


export const UserSignOut = () => {
  return {
    type: "SIGNOUT_SUCCEEDED",
    
  };
};
