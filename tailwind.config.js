/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ipad: "820px",
        laptop: "1366px", // 1366px ve üstü "laptop" olarak kabul edilir
        desktop: "1600px", // 1600px ve üstü "desktop"
      },
      colors: {
        bgHeaderColor: "#001F26",
        bgHeaderColorMenu: "#013F4D",
        bgHeaderButton: "#FFD43B",
        bgHeaderButtonPrimary: "#F3F3F3",
        bgNeedGray: "#5E5E5E",
        bgBorderGray: "#AEAEAE",
        bgQuestionBackgroundColor: "#FAFAFA",
        bgSearchBackgroundColor: "#F1F1F1",
        cookiesBorder: "#DBDBDB",
        cookiesButtonBackgroundColor: "#F3F3F3",
        cookiesButtonBackgroundColorHover: "#EBEBEB",
        cookiesIconColor: "#444444",
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
  safelist: [
    "bg-bgTeamMeetOneBackground",
    "bg-bgTeamMeetTwoBackground",
    "bg-bgTeamMeetThreeBackground",
    "text-gray-100",
    "text-white",
    "text-black",
    "text-bgHeaderColor",
    "xl:col-span-4",
    "xl:col-span-8",
    "col-span-12",
    "xl:row-span-2",
    "h-[250px]",
    "md:h-[300px]",
    "xl:h-[385px]",
    "xl:h-[800px]",
  ],
  plugins: [],
};
