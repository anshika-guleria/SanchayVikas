import { ScrollView, Text, View } from 'react-native';
import { useTheme } from '../(context)/ThemeContext';
import FloatingButtons from '../../components/FloatingButtons';
import Navbar from '../../components/Navbar';

const HIGHLIGHTS = [
  { icon: '⚡', label: 'Quick Approval Process' },
  { icon: '💹', label: 'Competitive Interest Rates' },
  { icon: '🧑‍💼', label: 'Expert Financial Guidance' },
  { icon: '✅', label: '100% Transparent Process' },
];

const STATS = [
  { value: '10K+', label: 'Happy Clients' },
  { value: '₹50Cr+', label: 'Disbursed' },
  { value: '10+', label: 'Years' },
  { value: '4', label: 'Loan Types' },
];

export default function AboutScreen() {
  const { darkMode, toggleDark } = useTheme();
  const bg = darkMode ? '#1A1A3E' : '#EEF0F8';
  const cardBg = darkMode ? '#252550' : '#FFFFFF';
  const titleColor = darkMode ? '#FFFFFF' : '#1A1A3E';
  const textColor = darkMode ? '#D1D5DB' : '#6B7280';

  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      <Navbar darkMode={darkMode} onToggleDark={toggleDark} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16, paddingTop: 32 }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: titleColor, marginBottom: 20 }}>
            About <Text style={{ color: '#534AB7' }}>Sanchay Vikas</Text>
          </Text>

          {/* Company image placeholder */}
          <View style={{ backgroundColor: cardBg, borderRadius: 16, overflow: 'hidden', marginBottom: 20, height: 180, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'rgba(83,74,183,0.1)', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 48, marginBottom: 8 }}>🏢</Text>
              <Text style={{ color: '#534AB7', fontWeight: '700', fontSize: 13, textAlign: 'center', paddingHorizontal: 20 }}>
                Sanchay Vikas Financial Solutions Limited
              </Text>
              <Text style={{ color: textColor, fontSize: 12, marginTop: 4 }}>Lucknow, Uttar Pradesh</Text>
            </View>
          </View>

          {/* About text */}
          <View style={{ backgroundColor: cardBg, borderRadius: 16, padding: 20, marginBottom: 20 }}>
            <Text style={{ fontSize: 13, color: textColor, lineHeight: 22, marginBottom: 12 }}>
              Sanchay Vikas Financial Solutions stands as a beacon of trust and excellence in the
              financial services industry. With years of dedicated experience, we have helped thousands
              of individuals and businesses achieve their financial aspirations.
            </Text>
            <Text style={{ fontSize: 13, color: textColor, lineHeight: 22, marginBottom: 12 }}>
              Our commitment to innovation, transparency, and customer-centric approach sets us apart.
              We believe in building lasting relationships based on trust, integrity, and mutual success.
            </Text>
            <Text style={{ fontSize: 13, color: textColor, lineHeight: 22 }}>
              Every financial journey is unique, and our team of seasoned professionals is dedicated to
              providing personalized solutions that align with your specific goals and circumstances.
            </Text>
          </View>

          {/* Stats */}
          <View style={{ backgroundColor: cardBg, borderRadius: 16, padding: 20, marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: '700', color: titleColor, marginBottom: 16 }}>Our Milestones</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {STATS.map((s) => (
                <View key={s.label} style={{ width: '50%', alignItems: 'center', paddingVertical: 12 }}>
                  <Text style={{ color: '#534AB7', fontSize: 24, fontWeight: '700' }}>{s.value}</Text>
                  <Text style={{ fontSize: 12, color: textColor, marginTop: 2 }}>{s.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Highlights */}
          <View style={{ backgroundColor: cardBg, borderRadius: 16, padding: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: '700', color: titleColor, marginBottom: 16 }}>Why We Stand Out</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              {HIGHLIGHTS.map((h) => (
                <View key={h.label} style={{ width: '47%', backgroundColor: 'rgba(83,74,183,0.1)', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 16 }}>{h.icon}</Text>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: titleColor, flex: 1 }}>{h.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

      
      </ScrollView>
      <FloatingButtons />
    </View>
  );
}