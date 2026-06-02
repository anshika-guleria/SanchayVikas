import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useTheme } from '../(context)/ThemeContext';

const TAB_ICONS: Record<string, string> = {
  index:    '🏠',
  services: '💼',
  about:    'ℹ️',
  contact:  '📞',
  apply:    '📝',
};

const TAB_LABELS: Record<string, string> = {
  index:    'Home',
  services: 'Services',
  about:    'About',
  contact:  'Contact',
  apply:    'Apply',
};

export default function TabLayout() {
  const { darkMode } = useTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkMode ? '#1A1A3E' : '#ffffff',
          borderTopColor: darkMode ? '#2d2d6e' : '#E5E7EB',
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#534AB7',
        tabBarInactiveTintColor: darkMode ? '#6B7280' : '#9CA3AF',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
        tabBarLabel: TAB_LABELS[route.name] ?? route.name,
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.45 }}>
            {TAB_ICONS[route.name] ?? '●'}
          </Text>
        ),
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="services" />
      <Tabs.Screen name="about" />
      <Tabs.Screen name="contact" />
      <Tabs.Screen name="apply" />
    </Tabs>
  );
}