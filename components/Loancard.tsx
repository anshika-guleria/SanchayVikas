import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

type Loan = { id: string; title: string; description: string; features: string[]; icon: string };

export default function LoanCard({ loan, darkMode }: { loan: Loan; darkMode: boolean }) {
  const router = useRouter();
  const cardBg = darkMode ? '#252550' : '#FFFFFF';
  const titleColor = darkMode ? '#a89df5' : '#534AB7';
  const textColor = darkMode ? '#D1D5DB' : '#6B7280';

  return (
    <View style={{ backgroundColor: cardBg, borderRadius: 16, padding: 20, marginBottom: 16 }}>
      <View style={{ width: 56, height: 56, backgroundColor: '#534AB7', borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 24 }}>{loan.icon}</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: '700', color: titleColor, marginBottom: 8 }}>{loan.title}</Text>
      <Text style={{ fontSize: 13, color: textColor, lineHeight: 20, marginBottom: 16 }}>{loan.description}</Text>
      {loan.features.map((f) => (
        <View key={f} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <Text style={{ color: '#10B981', fontSize: 14, marginRight: 8 }}>✓</Text>
          <Text style={{ fontSize: 13, color: textColor }}>{f}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={() => router.push('/apply' as any)}
        style={{ marginTop: 20, backgroundColor: '#534AB7', borderRadius: 12, paddingVertical: 14, alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 13 }}>→ Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
}