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

        bgTeamMeetOneBackground: "#013F4D",
        bgTeamMeetTwoBackground: "#F3F3F3",
        bgTeamMeetThreeBackground: "#FFD43B",
        bgTickBackground: "#32A753",
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
