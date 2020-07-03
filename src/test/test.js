function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen name="HomeApp" component={DrawerNavigator} />
            </>
          ) : (
            <Stack.Screen name="SigninScreen" component={SigninScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }