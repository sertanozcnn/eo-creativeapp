// src/redux/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { homeRightApi } from "../services/homeRightApi";
import { galleryAnimatedApi } from "../services/galleryAnimatedApi";
import { brandLogoApi } from "../services/brandLogoApi";
import { imageSectionApi } from "../services/imageSectionApi";
import { advantageContentApi } from "../services/advantageContentApi,";
import { teamMeetImageApi } from "../services/teamMeetImageApi";
import { commentMeetApi } from "../services/commentMeetApi";
import { socialLinkApi } from "../services/socialLinkApi";
import { questionSectionOneApi } from "../services/questionSectionOneApi";
import { questionSectionTwoApi } from "../services/questionSectionTwoApi";
import { homePricingApi } from "../services/homePricingApi";
import { designServiceSectionApi } from "../services/designServiceSectionApi";
import { designServiceTwoSectionApi } from "../services/designServiceTwoSectionApi";
import { designServiceEndSectionApi } from "../services/designServiceEndSection";
import { aboutOneSectionApi } from "../services/aboutOneSection";
import { aboutAdvantageContentOneApi } from "../services/aboutAdvantageContentOneApi";
import { aboutAdvantageContentTwoApi } from "../services/aboutAdvantageContentTwoApi ";
import { aboutImageSectionApi } from "../services/aboutImageSectionApi";
import { brandContactApi } from "../services/brandContactApi";
import { contactRequestCreateApi } from "../services/contactRequestCreateApi";

const store = configureStore({
  reducer: {
    [homeRightApi.reducerPath]: homeRightApi.reducer,
    [galleryAnimatedApi.reducerPath]: galleryAnimatedApi.reducer,
    [brandLogoApi.reducerPath]: brandLogoApi.reducer,
    [imageSectionApi.reducerPath]: imageSectionApi.reducer,
    [advantageContentApi.reducerPath]: advantageContentApi.reducer,
    [teamMeetImageApi.reducerPath]: teamMeetImageApi.reducer,
    [commentMeetApi.reducerPath]: commentMeetApi.reducer,
    [socialLinkApi.reducerPath]: socialLinkApi.reducer,
    [questionSectionOneApi.reducerPath]: questionSectionOneApi.reducer,
    [questionSectionTwoApi.reducerPath]: questionSectionTwoApi.reducer,
    [homePricingApi.reducerPath]: homePricingApi.reducer,
    [designServiceSectionApi.reducerPath]: designServiceSectionApi.reducer,
    [aboutOneSectionApi.reducerPath]: aboutOneSectionApi.reducer,
    [aboutImageSectionApi.reducerPath]: aboutImageSectionApi.reducer,
    [brandContactApi.reducerPath]: brandContactApi.reducer,

    [aboutAdvantageContentOneApi.reducerPath]:
      aboutAdvantageContentOneApi.reducer,
    [aboutAdvantageContentTwoApi.reducerPath]:
      aboutAdvantageContentTwoApi.reducer,

    [designServiceEndSectionApi.reducerPath]:
      designServiceEndSectionApi.reducer,

    [designServiceTwoSectionApi.reducerPath]:
      designServiceTwoSectionApi.reducer,

    [contactRequestCreateApi.reducerPath]: contactRequestCreateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(homeRightApi.middleware)
      .concat(homePricingApi.middleware)
      .concat(galleryAnimatedApi.middleware)
      .concat(brandLogoApi.middleware)
      .concat(imageSectionApi.middleware)
      .concat(advantageContentApi.middleware)
      .concat(teamMeetImageApi.middleware)
      .concat(commentMeetApi.middleware)
      .concat(socialLinkApi.middleware)
      .concat(questionSectionOneApi.middleware)
      .concat(designServiceSectionApi.middleware)
      .concat(designServiceTwoSectionApi.middleware)
      .concat(designServiceEndSectionApi.middleware)
      .concat(aboutOneSectionApi.middleware)
      .concat(aboutAdvantageContentOneApi.middleware)
      .concat(aboutAdvantageContentTwoApi.middleware)
      .concat(aboutImageSectionApi.middleware)
      .concat(brandContactApi.middleware)
      .concat(contactRequestCreateApi.middleware)
      .concat(questionSectionTwoApi.middleware),
});

export default store;
