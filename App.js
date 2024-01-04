import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./screens/protected/stack/account/AccountScreen";
import AddBookingScreen from "./screens/protected/stack/bookings/AddBookingScreen";
import ViewBookingScreen from "./screens/protected/stack/bookings/ViewBookingScreen";
import ViewNotificationScreen from "./screens/protected/stack/notifications/ViewNotificationScreen";
import BookingsScreen from "./screens/protected/tabs/BookingsScreen";
import NotificationsScreen from "./screens/protected/tabs/NotificationsScreen";
import HomeScreen from "./screens/public/HomeScreen";
import LoginScreen from "./screens/public/LoginScreen";
import RegisterScreen from "./screens/public/RegisterScreen";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const PublicRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const ProtectedStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={ProtectedTabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="AddBooking" component={AddBookingScreen} />
      <Stack.Screen name="ViewBooking" component={ViewBookingScreen} />
      <Stack.Screen
        name="ViewNotifications"
        component={ViewNotificationScreen}
      />
    </Stack.Navigator>
  );
};

const ProtectedTabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerLeft: () => {
          return <Text>Prova</Text>;
        },
      }}
    >
      <Tabs.Screen
        name="Bookings"
        options={{
          title: "Prenotazioni",
        }}
        component={BookingsScreen}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifiche",
        }}
        component={NotificationsScreen}
      />
    </Tabs.Navigator>
  );
};

const ProtectedRoute = () => {
  return <ProtectedStackNavigation />;
};

const Navigation = () => {
  const auth = false;

  return (
    <>
      {!!auth && <ProtectedRoute />}
      {!!!auth && <PublicRoute />}
    </>
  );
};

const Root = () => {
  return <Navigation />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
