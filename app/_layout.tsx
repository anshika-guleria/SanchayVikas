import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from './(context)/ThemeContext';

function RootLayoutNav() {
  const { darkMode } = useTheme();
  return (
    <>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}