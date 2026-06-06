import { ScrollView, Text, View } from 'react-native';
import { useTheme } from '../(context)/ThemeContext';
import FloatingButtons from '../../components/FloatingButtons';
import HeroSection from '../../components/HeroSection';
import LoanCard from '../../components/Loancard';
import Navbar from '../../components/Navbar';
import { loanTypes } from '../../constants/data';

export default function HomeScreen() {
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
        <HeroSection darkMode={darkMode} />

        {/* Services section header */}
        <View style={{ paddingHorizontal: 16, alignItems: 'center' }}>
          <View style={{ backgroundColor: pillBg, paddingHorizontal: 16, paddingVertical: 6, borderRadius: 999, marginBottom: 12 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', color: pillText }}>Our Financial Services</Text>
          </View>
          <Text style={{ fontSize: 22, fontWeight: '700', color: titleColor, textAlign: 'center' }}>
            Comprehensive{' '}
            <Text style={{ color: '#534AB7' }}>Loan Solutions</Text>
          </Text>
          <Text style={{ fontSize: 13, color: subText, textAlign: 'center', marginTop: 4, marginBottom: 16 }}>
            Tailored financial products for your unique needs
          </Text>
        </View>

        <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
          {loanTypes.map((loan) => (
            <LoanCard key={loan.id} loan={loan} darkMode={darkMode} />
          ))}
        </View>

        {/* Stats strip */}
        <View style={{ marginHorizontal: 16, marginBottom: 24, backgroundColor: cardBg, borderRadius: 16, padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {[
              { value: '10K+', label: 'Happy Clients' },
              { value: '₹50Cr+', label: 'Loans Disbursed' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat) => (
              <View key={stat.label} style={{ alignItems: 'center' }}>
                <Text style={{ color: '#534AB7', fontSize: 20, fontWeight: '700' }}>{stat.value}</Text>
                <Text style={{ fontSize: 11, color: subText, marginTop: 2 }}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
      <FloatingButtons />
    </View>
  );
}