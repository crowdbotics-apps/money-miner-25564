import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings222978Navigator from '../features/Settings222978/navigator';
import Settings222963Navigator from '../features/Settings222963/navigator';
import NotificationList222962Navigator from '../features/NotificationList222962/navigator';
import Maps222961Navigator from '../features/Maps222961/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings222978: { screen: Settings222978Navigator },
Settings222963: { screen: Settings222963Navigator },
NotificationList222962: { screen: NotificationList222962Navigator },
Maps222961: { screen: Maps222961Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
