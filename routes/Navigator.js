import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FilmDetail from "../Components/FilmDetail";
import Search from "../Components/Search";
import FilmItem from "../Components/FilmItem";

const screens = {
  Recherche: {
    screen: Search,
  },

  Film: {
    screen: FilmItem,
  },
  Details: {
    screen: FilmDetail,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
