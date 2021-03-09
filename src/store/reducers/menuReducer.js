const initState = {
  SignInMenu: false,
  SignUpMenu: false,
  forgetMenu:false,
  verifyPhone:false
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case "SignInMenu":
      console.log("SignInMenu");
      return {  SignInMenu: !state.SignInMenu, SignUpMenu: false };
    case "SignUpMenu":
      console.log("SignUpMenu");
      return {  SignUpMenu: !state.SignUpMenu, SignInMenu: false };

      case "verifyPhone":
        console.log("verifyPhone");
        return {   verifyPhone: !state.verifyPhone,
            SignUpMenu: false,
            SignInMenu: false,
          };

       


        case "forgetMenu":
            console.log("forgetMenu");
            return {  forgetMenu: !state.forgetMenu, SignInMenu: false };


    //   case "SignUpMenu":
    //     console.log("SignUpMenu");
    //     return { ...state, SignUpMenu: !state.signUpMenu, SignInMenu: false };

    // case "CREATE_PROJECT_ERROR":
    //   console.log("created project error", action.err);
    //   return state;
    default:
      return state;
  }
};

export default menuReducer;
