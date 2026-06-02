import { useState } from 'react';
import { ActivityIndicator, Alert, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../(context)/ThemeContext';
import FloatingButtons from '../../components/FloatingButtons';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { contactInfo } from '../../constants/data';

const CARDS = [
  { icon: '📍', label: 'Address', value: contactInfo.address, href: undefined },
  { icon: '📞', label: 'Office', value: contactInfo.office, href: `tel:${contactInfo.office}` },
  { icon: '🎧', label: 'Support', value: contactInfo.support, href: `tel:${contactInfo.support}` },
  { icon: '✉️', label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
];

export default function ContactScreen() {
  const { darkMode, toggleDark } = useTheme();
  const bg = darkMode ? '#1A1A3E' : '#EEF0F8';
  const cardBg = darkMode ? '#252550' : '#FFFFFF';
  const titleColor = darkMode ? '#FFFFFF' : '#1A1A3E';
  const labelColor = darkMode ? '#a89df5' : '#534AB7';
  const valueColor = darkMode ? '#D1D5DB' : '#6B7280';
  const inputBg = darkMode ? '#2d2d6e' : '#F9FAFB';
  const inputText = darkMode ? '#FFFFFF' : '#1f2937';
  const inputBorder = darkMode ? '#3d3d8e' : '#E5E7EB';
  const placeholder = darkMode ? '#6B7280' : '#D1D5DB';
  const fieldLabel = darkMode ? '#D1D5DB' : '#6B7280';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSend = () => {
    if (!form.name || !form.message) {
      Alert.alert('Missing fields', 'Please fill name and message.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('✅ Sent!', "We'll get back to you soon.");
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      <Navbar darkMode={darkMode} onToggleDark={toggleDark} />
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={{ paddingHorizontal: 16, paddingTop: 32, alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: titleColor, textAlign: 'center', marginBottom: 4 }}>
            We are <Text style={{ color: '#534AB7' }}>Here to Help</Text>
          </Text>
          <Text style={{ fontSize: 13, color: valueColor, textAlign: 'center', marginBottom: 24 }}>
            Reach out to us for any queries or financial assistance
          </Text>
        </View>

        <View style={{ paddingHorizontal: 16 }}>
          {CARDS.map((c) => (
            <TouchableOpacity
              key={c.label}
              onPress={() => c.href && Linking.openURL(c.href)}
              activeOpacity={c.href ? 0.7 : 1}
              style={{ backgroundColor: cardBg, flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 14, marginBottom: 12 }}
            >
              <View style={{ width: 44, height: 44, backgroundColor: '#534AB7', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
                <Text style={{ fontSize: 18 }}>{c.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 11, fontWeight: '600', color: labelColor, marginBottom: 2 }}>{c.label}</Text>
                <Text style={{ fontSize: 13, color: valueColor }} numberOfLines={2}>{c.value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ margin: 16, backgroundColor: cardBg, borderRadius: 16, padding: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: titleColor, marginBottom: 20 }}>Send us a Message</Text>

          {[
            { label: 'Your Name', field: 'name', placeholder: 'Enter your name', keyboard: 'default' },
            { label: 'Email Address', field: 'email', placeholder: 'your@email.com', keyboard: 'email-address' },
          ].map(({ label, field, placeholder: ph, keyboard }) => (
            <View key={field} style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 11, fontWeight: '600', color: fieldLabel, marginBottom: 6 }}>{label}</Text>
              <TextInput
                value={(form as any)[field]}
                onChangeText={(v) => update(field, v)}
                placeholder={ph}
                placeholderTextColor={placeholder}
                keyboardType={keyboard as any}
                autoCapitalize={field === 'email' ? 'none' : 'words'}
                style={{ backgroundColor: inputBg, color: inputText, borderWidth: 1, borderColor: inputBorder, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 13 }}
              />
            </View>
          ))}

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 11, fontWeight: '600', color: fieldLabel, marginBottom: 6 }}>Your Message</Text>
            <TextInput
              value={form.message}
              onChangeText={(v) => update('message', v)}
              placeholder="Tell us how we can help..."
              placeholderTextColor={placeholder}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              style={{ backgroundColor: inputBg, color: inputText, borderWidth: 1, borderColor: inputBorder, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 13, height: 120 }}
            />
          </View>

          <TouchableOpacity
            onPress={handleSend}
            disabled={loading}
            style={{ backgroundColor: '#534AB7', borderRadius: 12, paddingVertical: 16, alignItems: 'center', opacity: loading ? 0.8 : 1 }}
          >
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff', fontWeight: '700', fontSize: 14 }}>📨 Send Message</Text>}
          </TouchableOpacity>
        </View>

        <Footer darkMode={darkMode} />
      </ScrollView>
      <FloatingButtons />
    </View>
  );
}
