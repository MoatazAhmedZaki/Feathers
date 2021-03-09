const initState = {
  authError: null,
  user: null,
  isLogin: false,
  user2: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // case "LOGIN_ERROR":
    //   console.log("LOGIN_ERROR");

    //   return { ...state, authError: "login Failed" };

    case "LOGIN_SUCCEEDED":
      console.log("LOGIN_SUCCEEDED", action.user);
      return {  ...state, authError: null, user: action.user, isLogin: true , user2: null,
      };
    case "NOT_VERIFIED":
      console.log("NOT_VERIFIED", action.user);
      return { ...state, user2: action.user };

      case "SIGNOUT_SUCCEEDED":
        console.log("SIGNOUT_SUCCEEDED");
        return { state : initState };
    // case "SIGNOUT_SUCCESS":
    //   console.log("SIGNOUT_SUCCESS");
    //   return state;

    //   case "SIGNUP_SUCCESS":
    //     console.log("SIGNUP_SUCCESS");
    //     return { ...state, authError: null };
    //   case "SIGNUP_ERROR":
    //     console.log("SIGNUP_ERROR");
    //     return { ...state, authError: action.err };;

    default:
      return state;
  }
};

export default authReducer;
