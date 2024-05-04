import {
  Inter,
  Roboto_Mono,
  Dancing_Script,
  Oooh_Baby,
  Caveat,
  Libre_Barcode_39_Text,
  Bebas_Neue,
  WindSong,
  Alegreya_Sans_SC,
  Poppins,
} from "next/font/google";

export const wind = WindSong({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

const Alegreya = Alegreya_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
});
const pop = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
});
const bn = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const int = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const agy = Alegreya.className;
export const wind_song = wind.className;
export const beb_neu = bn.className;
export const int_er = int.className;
export const poppins = pop.className;
