import { useRouter } from 'expo-router';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { contactInfo, navTabs, socialLinks } from '../constants/data';
export default function Footer({ darkMode }: { darkMode: boolean }) {
  const router = useRouter();
  const bg = darkMode ? '#13133A' : '#111827';

  return (
    <View style={{ backgroundColor: bg, paddingHorizontal: 20, paddingTop: 40, paddingBottom: 40 }}>
      <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18, lineHeight: 24 }}>
        Sanchay <Text style={{ color: '#A78BFA' }}>Vikas</Text> Financial{'\n'}
        <Text style={{ color: '#A78BFA' }}>Solutions</Text> Limited
      </Text>
      <Text style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 20, marginTop: 12, marginBottom: 4 }}>
        Your trusted partner for comprehensive financial solutions.
      </Text>
      <Text style={{ color: '#6B7280', fontSize: 14, marginBottom: 20 }}>CIN: {contactInfo.cin}</Text>

      {/* Social */}
  <View style={{ flexDirection: 'row', gap: 10, marginBottom: 32 }}>
  {[
    { icon: 'facebook', url: socialLinks.facebook },
    { icon: 'instagram', url: socialLinks.instagram },
    { icon: 'whatsapp', url: socialLinks.whatsapp },
  ].map((s) => (
    <TouchableOpacity
      key={s.icon}
      onPress={() => Linking.openURL(s.url)}
      style={{
        width: 36,
        height: 36,
        backgroundColor: '#374151',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FontAwesome
        name={s.icon}
        size={18}
        color="#FFFFFF"
      />
    </TouchableOpacity>
  ))}
</View>

      <View style={{ flexDirection: 'row' }}>
        {/* Quick links */}
        <View style={{ flex: 0.8 }}>
          <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 16, marginBottom: 12 }}>Quick Links</Text>
          {navTabs.map((t) => (
            <TouchableOpacity key={t.href} onPress={() => router.push(t.href as any)} style={{ marginBottom: 8 }}>
              <Text style={{ color: '#9CA3AF', fontSize: 15 }}>{t.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 16, marginBottom: 12 }}>Contact Info</Text>
          <Text style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 22, marginBottom: 8 }}>📍 {contactInfo.address}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactInfo.support}`)}>
            <Text style={{ color: '#9CA3AF', fontSize: 13, marginBottom: 10 }}>📞 {contactInfo.support}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactInfo.office}`)}>
            <Text style={{ color: '#9CA3AF', fontSize: 13, marginBottom: 10 }}>📞 {contactInfo.office}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contactInfo.email}`)}>
            <Text style={{ color: '#9CA3AF', fontSize: 13 }}>{contactInfo.email}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderTopWidth: 1, borderTopColor: '#374151', marginTop: 32, paddingTop: 16 }}>
        <Text style={{ color: '#4B5563', fontSize: 13, textAlign: 'center' }}>
          © 2024 Sanchay Vikas Financial Solutions Limited. All rights reserved.
        </Text>
      </View>
    </View>
  );
}