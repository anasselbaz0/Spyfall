// import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { STEPS } from "./appTypes";
// import { RootState } from "../store";
//
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     step: STEPS.ONBOARDING
//   },
//   reducers: {
//     setStep(state, action: PayloadAction<STEPS>) {
//       state.step = action.payload
//     }
//   }
// })
//
// export const appSelectors = {
//   step: (state: RootState) => state.app.step
// }
//
// export const { setStep } = appSlice.actions
//
// export default appSlice.reducer