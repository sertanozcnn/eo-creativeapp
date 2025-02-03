/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgHeaderColor: "#001F26",
        bgHeaderColorMenu: "#013F4D",
        bgHeaderButton: "#FFD43B",
        bgHeaderButtonPrimary: "#F3F3F3",
        bgNeedGray: "#5E5E5E",
        bgBorderGray: "#AEAEAE",
        bgQuestionBackgroundColor: "#FAFAFA",
        bgSearchBackgroundColor: "#F1F1F1",

        eoLogoBackgroundColor: "#9D9F98",
        bgTeamMeetOneBackground: "#013F4D",
        bgTeamMeetTwoBackground: "#F3F3F3",
        bgTeamMeetThreeBackground: "#FFD43B",
        bgTickBackground: "#32A753",
        bgTeamBackground: "#0B3039",
        bgTeamTextColor: "#667C81",
        bgContactInputTextColor: "#A1A1A1",
        bgTeamBorderBackground: "#073B47",
        bgDividerBgOne: "#C5C5C5",
        bgDividerBgTwo: "#000000",
        black: "#000000",
        primary: "#22222",
        accent: "34495E",
      },

      fontFamily: {
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primaryExtraBold: ["ExtraBold"],
        primaryBold: ["Bold"],
        primaryExtraLight: ["ExtraLight"],
        primaryItalic: ["Italic"],
        primaryLight: ["Light"],
        primarySemiBold: ["SemiBold"],
        primaryThin: ["Thin"],
      },
    },
  },
  plugins: [],
};
