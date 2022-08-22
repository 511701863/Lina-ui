import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from "unocss/vite";

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
const icons=[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
    "account-circle",
    "local-play",
    "liquor",
  ]
  const safelist = [
    ...colors.map((v) => `bg-${v}-100`),
    ...colors.map((v) => `bg-${v}-400`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-100`),
    ...colors.map((v) => `hover:bg-${v}-300`),
    ...colors.map((v) => `hover:bg-${v}-400`),
    ...colors.map((v) => `hover:bg-${v}-500`),
    ...colors.map((v) => `border-${v}-400`),
    ...colors.map((v) => `border-${v}-500`),
    ...colors.map((v) => `text-${v}-500`),
    ...colors.map((v) => `hover:text-${v}-500`),
    ...icons.map((v) => `i-ic-baseline-${v}`),
    'text-white',
    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`).concat(['px-3.5','px-2.5','px-1.5']),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`).concat(['py-3.5','py-2.5','py-1.5']),
    ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
    ...["rounded-full", "rounded-lg"],
    ...[
      "search",
      "edit",
      "check",
      "message",
      "star-off",
      "delete",
      "add",
      "share",
    ].map((v) => `i-ic-baseline-${v}`),
  ];
  
  export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });