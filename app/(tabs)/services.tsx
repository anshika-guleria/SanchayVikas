import { ScrollView, Text, View } from 'react-native';
import { useTheme } from '../(context)/ThemeContext';
import FloatingButtons from '../../components/FloatingButtons';
import LoanCard from '../../components/Loancard';
import Navbar from '../../components/Navbar';
import { loanTypes } from '../../constants/data';

const WHY = [
  { icon: '⚡', title: 'Quick Approval', desc: 'Loan approved in as little as 24 hours' },
  { icon: '💰', title: 'Best Rates', desc: 'Competitive interest rates tailored for you' },
  { icon: '🔒', title: '100% Secure', desc: 'Your data is safe end-to-end' },
  { icon: '🤝', title: 'Expert Support', desc: 'Dedicated advisors at your service' },
];

export default function ServicesScreen() {
  const { darkMode, toggleDark } = useTheme();
  const bg = darkMode ? '#1A1A3E' : '#EEF0F8';
  const titleColor = darkMode ? '#FFFFFF' : '#1A1A3E';
  const pillBg = darkMode ? '#2d2d6e' : '#FFFFFF';
  const pillText = darkMode ? '#a89df5' : '#534AB7';
  const subText = darkMode ? '#9CA3AF' : '#6B7280';
  const cardBg = darkMode ? '#252550' : '#FFFFFF';

  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      <Navbar darkMode={darkMode} onToggleDark={toggleDark} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 16, paddingTop: 32, paddingBottom: 16, alignItems: 'center' }}>
          <View style={{ backgroundColor: pillBg, paddingHorizontal: 16, paddingVertical: 6, borderRadius: 999, marginBottom: 12 }}>
            <Text style={{ fontSize: 12, fontWeight: '600', color: pillText }}>Our Financial Services</Text>
          </View>
          <Text style={{ fontSize: 22, fontWeight: '700', color: titleColor, textAlign: 'center', marginBottom: 4 }}>
            Comprehensive <Text style={{ color: '#534AB7' }}>Loan Solutions</Text>
          </Text>
          <Text style={{ fontSize: 13, color: subText, textAlign: 'center', maxWidth: 280 }}>
            Tailored financial products designed to meet your unique needs
          </Text>
        </View>

        <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
          {loanTypes.map((loan) => (
            <LoanCard key={loan.id} loan={loan} darkMode={darkMode} />
          ))}
        </View>

        {/* Why choose us */}
        <View style={{ marginHorizontal: 16, marginBottom: 24, backgroundColor: cardBg, borderRadius: 16, padding: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: titleColor, marginBottom: 16 }}>Why Choose Us?</Text>
          {WHY.map((item) => (
            <View key={item.title} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 }}>
              <View style={{ width: 40, height: 40, backgroundColor: 'rgba(83,74,183,0.12)', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Text style={{ fontSize: 18 }}>{item.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 13, fontWeight: '600', color: titleColor }}>{item.title}</Text>
                <Text style={{ fontSize: 12, color: subText, marginTop: 2 }}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

       
      </ScrollView>
      <FloatingButtons />
    </View>
  );
}