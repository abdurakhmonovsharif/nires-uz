import { Seo } from "@/layout";
import {
  Faculties,
  Features,
  Hero,
  Integration,
  Ministry,
  Nature,
  News,
  Organization,
  Sell,
  TypesBattery,
} from "@/pages/home/sections";

export const Home = () => {
  return (
    <Seo>
      <Hero />
      <News />
      <Organization />
      <Nature />
      <TypesBattery />
      <Integration />
      <Faculties />
      <Sell />
      <Features />
      <Ministry />
    </Seo>
  );
};
