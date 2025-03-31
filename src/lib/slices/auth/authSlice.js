import { authApiSlice } from "./authApiSlice";
import { setCookie, destroyCookie } from "nookies";

const activeTab = { signIn: true, signUp: false };
const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    isRegister: false,
    isModalOpen: false,
    activeTab,
    isAdmin: false,
    kycStatus: "pending",
    userAddress: "",
    currentpropertyData: {},
  },
  reducers: {
    logout(state, action) {
      state.token = null;
      state.user = null;
      state.isAdmin = false;
      state.isModalOpen = false;
      destroyCookie(null, "token", { path: "/" });
      window.location.reload();
    },

    showModal(state, action) {
      state.isModalOpen = true;
    },
    setKycStatus(state, action) {
      state.kycStatus = action.payload;
    },
    setUserAddress(state, action) {
      state.userAddress = action.payload;
    },
    setCurrentPropertyData(state, action) {
      state.currentpropertyData = action.payload;
    },
    toggleModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleActiveTab(state, action) {
      const key = action.payload;
      let status;
      if (key == "signIn") {
        status = { signIn: true, signUp: false };
      } else if (key === "signUp") {
        status = { signIn: false, signUp: true };
      }
      state.activeTab = status;
    },
    setUserData: (state, action) => {
      const { userData } = action.payload;
      state.user = {
        ...state.user, // Merge the existing user data
        ...action.payload, // Overwrite with new data
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.googleAuthLogin.matchFulfilled,
      (state, action) => {
        const { token, ...userData } = action.payload;
        state.token = token;
        state.user = userData;

        if (userData?.kycStatus !== undefined) {
          state.kycStatus = userData.kycStatus;
        }

        setCookie(null, "token", token, {
          //   maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.verifyOtp.matchFulfilled,
      (state, action) => {
        const { token, ...userData } = action.payload;
        state.token = token;
        state.user = {
          ...state.user, // Merge the existing user data
          ...userData, // Overwrite with new fields from userData
        };
        if (userData?.isKYC !== undefined) {
          state.kycStatus = userData.isKYC ? "verified" : "pending";
        }

        setCookie(null, "token", token, {
          //   maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.register.matchFulfilled,
      (state, action) => {
        state.isRegister = action.payload?.success;
      }
    );

    builder.addMatcher(
      authApiSlice.endpoints.updateUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data;
      }
    );
  },
});

export const {
  setUserData,
  logout,
  showModal,
  setKycStatus,
  toggleModal,
  toggleActiveTab,
  setUserAddress,
  setCurrentPropertyData,
} = authSlice.actions;
export default authSlice.reducer;
