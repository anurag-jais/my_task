const initialState = {
  name: "Anurag Jaiswal",
  email: "anurag@cronj.com",
  info: "Target Coporation",
  location: "India",
  index: "0",
  list: [
    "Overview",
    "Repositiories",
    "Projects",
    "Stars",
    "Followers",
    "Following"
  ],
  isfollowBtnClicked: false,
  loading: false,
  users: []
};

const reducer = (state = initialState, action) => {
  console.log("in reducer");
  switch (action.type) {
    case "RECORDS/FETCH_FAILED":
      return {
        ...state,
        loading: true,
        users: []
      };
    case "FETCH_USERS_SUCCESS":
      console.log(
        ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.",
        action.users
      );
      return {
        ...state,
        loading: false,
        users: action.users
      };
    case "HANDLE_FOLLOW":
      let val = state.isfollowBtnClicked;
      console.log("val>>", val);
      return {
        ...state,
        isfollowBtnClicked: !val
      };
  }
  if (action.type === "FETCH_RECORDS") {
    return {
      location: "America"
    };
  }
  return state;
};

export default reducer;
