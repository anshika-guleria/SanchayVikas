import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HeroSection({ darkMode }: { darkMode: boolean }) {
  const router = useRouter();
  const bg = darkMode ? '#1A1A3E' : '#EEF0F8';
  const titleColor = darkMode ? '#FFFFFF' : '#1A1A3E';
  const pillBg = darkMode ? '#2d2d6e' : '#FFFFFF';
  const pillText = darkMode ? '#a89df5' : '#534AB7';
  const outlineBg = darkMode ? '#2d2d6e' : '#FFFFFF';

  return (
    <View style={{ backgroundColor: bg, paddingHorizontal: 24, paddingTop: 48, paddingBottom: 64, alignItems: 'center' }}>
      {/* Decorative blob */}
      <View style={{ position: 'absolute', left: -40, top: 60, width: 120, height: 120, borderRadius: 60, backgroundColor: 'rgba(83,74,183,0.08)' }} />

      {/* Badge */}
      <View style={{ backgroundColor: pillBg, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999, marginBottom: 24 }}>
        <Text style={{ fontSize: 14, marginRight: 4 }}>⭐</Text>
        <Text style={{ fontSize: 12, fontWeight: '600', color: pillText }}>Trusted Financial Partner</Text>
      </View>

      {/* Headline */}
      <Text style={{ fontSize: 30, fontWeight: '800', textAlign: 'center', color: titleColor, lineHeight: 40 }}>
        Transform{' '}
        <Text style={{ color: '#534AB7' }}>Your Financial{'\n'}Dreams </Text>
        <Text style={{ color: titleColor }}>Into Reality</Text>
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 14, color: '#9CA3AF', textAlign: 'center', marginTop: 16, marginBottom: 32, lineHeight: 22, maxWidth: 300 }}>
        Empowering your journey with innovative loan solutions and personalized financial guidance
      </Text>

      {/* CTA */}
      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => router.push('/apply' as any)}
          style={{ backgroundColor: '#534AB7', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 999 }}>
          <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 14 }}>🚀 Apply Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/services' as any)}
          style={{ backgroundColor: outlineBg, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 999, borderWidth: 1, borderColor: 'rgba(83,74,183,0.3)' }}>
          <Text style={{ color: '#534AB7', fontWeight: '600', fontSize: 14 }}>🧭 Explore Services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
