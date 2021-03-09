
// const initState = {
//     lan:"AR"
//   };
  
  const lanReducer = (state = "en", action) => {
    switch (action.type) {
      case "Change_Lan":
        console.log("Change_Lan", action.lan);
        return action.lan;
  
        // case "CREATE_PROJECT_ERROR":
        //   console.log("created project error", action.err);
        //   return state;
          default: return state;
    }     
  
  };
  
  export default lanReducer;
  