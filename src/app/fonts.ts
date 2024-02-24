import {
  Texturina,
  Libre_Barcode_39_Text,
  Libre_Barcode_128,
} from "next/font/google";

export const texturina = Texturina({
  subsets: ["latin"],
  weight: ["400"],
});

export const libreWithText = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export const libre = Libre_Barcode_128({ subsets: ["latin"], weight: ["400"] });
