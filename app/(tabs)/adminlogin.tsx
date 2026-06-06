import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// Import Ionicons from Expo's built-in vector icons pack
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../(context)/ThemeContext';
import Navbar from '../../components/Navbar';
import { colors, spacing } from '../../constants/theme';

export default function AdminLogin() {
  const { darkMode, toggleDark } = useTheme();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [focusedInput, setFocusedInput] = useState<'username' | 'password' | null>(null);

  // Dynamic Theme Styling variables
  const bg = darkMode ? colors.darkBg : colors.background;
  const cardBg = darkMode ? colors.darkCard : colors.cardBg;
  const textColor = darkMode ? colors.white : colors.textPrimary;
  const placeholderColor = darkMode ? colors.textMuted : colors.textSecondary;
  const inputBg = darkMode ? '#2E2E5D' : colors.white;
  const borderDefault = darkMode ? 'rgba(255,255,255,0.1)' : colors.border;

  const handleLogin = () => {
    if (username.trim() === 'admin' && password === 'admin123') {
      Alert.alert('🔐 Success', 'Admin Login Successful');
    } else {
      Alert.alert('❌ Error', 'Invalid Username or Password');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg }}>
       <Navbar darkMode={darkMode} onToggleDark={toggleDark} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: spacing.lg }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Main Card Container */}
          <View
            style={{
              backgroundColor: cardBg,
              borderRadius: 28,
              padding: spacing.xl,
              shadowColor: '#000',
              shadowOpacity: darkMode ? 0.3 : 0.08,
              shadowRadius: 24,
              shadowOffset: { width: 0, height: 8 },
              elevation: 8,
              borderWidth: darkMode ? 1 : 0,
              borderColor: 'rgba(255,255,255,0.05)',
            }}
          >
            {/* Lock Header Icon Badge */}
            <View style={{ alignItems: 'center', marginBottom: spacing.md }}>
              <View style={{
                backgroundColor: 'rgba(83, 74, 183, 0.1)',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Ionicons name="lock-closed" size={26} color={colors.primary} />
              </View>
            </View>

            <Text
              style={{
                fontSize: 26,
                fontWeight: '800',
                color: colors.primary,
                textAlign: 'center',
                marginBottom: 6,
                letterSpacing: 0.3,
              }}
            >
              Admin Portal
            </Text>

            <Text
              style={{
                color: placeholderColor,
                textAlign: 'center',
                fontSize: 14,
                marginBottom: spacing.xl,
                paddingHorizontal: 10,
                lineHeight: 20,
              }}
            >
              Enter credentials below to securely access management settings.
            </Text>

            {/* Username Input */}
            <Text style={{ color: textColor, fontWeight: '600', fontSize: 13, marginBottom: 6, opacity: 0.8 }}>Username</Text>
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor={placeholderColor}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => setFocusedInput('username')}
              onBlur={() => setFocusedInput(null)}
              style={{
                backgroundColor: inputBg,
                borderWidth: 1.5,
                borderColor: focusedInput === 'username' ? colors.primary : borderDefault,
                borderRadius: 14,
                paddingHorizontal: 16,
                paddingVertical: 14,
                color: textColor,
                fontSize: 15,
                marginBottom: spacing.md,
              }}
            />

            {/* Password Input */}
            <Text style={{ color: textColor, fontWeight: '600', fontSize: 13, marginBottom: 6, opacity: 0.8 }}>Password</Text>
            <View style={{ position: 'relative', marginBottom: spacing.xl }}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={placeholderColor}
                secureTextEntry={secureText}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                style={{
                  backgroundColor: inputBg,
                  borderWidth: 1.5,
                  borderColor: focusedInput === 'password' ? colors.primary : borderDefault,
                  borderRadius: 14,
                  paddingLeft: 16,
                  paddingRight: 50, 
                  paddingVertical: 14,
                  color: textColor,
                  fontSize: 15,
                }}
              />
              
              {/* Password visibility vector toggle */}
              <TouchableOpacity
                onPress={() => setSecureText(!secureText)}
                activeOpacity={0.6}
                style={{
                  position: 'absolute',
                  right: 16,
                  top: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons 
                  name={secureText ? "eye-off" : "eye"} 
                  size={22} 
                  color={placeholderColor} 
                />
              </TouchableOpacity>
            </View>

            {/* Submit CTA Button */}
            <TouchableOpacity
              onPress={handleLogin}
              activeOpacity={0.85}
              style={{
                backgroundColor: colors.primary,
                paddingVertical: 16,
                borderRadius: 14,
                alignItems: 'center',
                shadowColor: colors.primary,
                shadowOpacity: 0.3,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 4 },
                elevation: 4,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 16,
                  fontWeight: '700',
                  letterSpacing: 0.2,
                }}
              >
                Sign In Securely
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}