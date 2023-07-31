import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import HeaderComponent from "./src/components/Header/HeaderComponent";
import FooterComponent from "./src/components/Footer/FooterComponent";
import About from "./src/components/Sections/About";
import Contact from "./src/components/Sections/Contact";

import ProjectSection from "./src/components/Sections/ProjectSection";
import SectionHeader from "./src/components/Sections/SectionHeader";

import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <HomeScreen />
  );
}