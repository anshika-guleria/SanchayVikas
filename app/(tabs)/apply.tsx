import { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../(context)/ThemeContext';
import FloatingButtons from '../../components/FloatingButtons';
import Navbar from '../../components/Navbar';
import { loanTypes } from '../../constants/data';

export default function ApplyScreen() {
  const { darkMode, toggleDark } = useTheme();

  const pageBg        = darkMode ? '#1A1A3E'                  : '#EEF0F8';
  const titleColor    = darkMode ? '#8B83E8'                  : '#534AB7';
  const subtitleColor = darkMode ? '#D1D5DB'                  : '#6B7280';
  const cardBg        = darkMode ? 'rgba(37,37,80,0.85)'      : '#FFFFFF';
  const cardBorder    = darkMode ? 'rgba(139,131,232,0.25)'   : '#E5E7EB';
  const fieldLabel    = darkMode ? '#A89DF5'                  : '#534AB7';
  const inputBg       = darkMode ? 'rgba(255,255,255,0.07)'   : '#F9FAFB';
  const inputBorder   = darkMode ? 'rgba(139,131,232,0.35)'   : '#E5E7EB';
  const inputText     = darkMode ? '#FFFFFF'                  : '#1f2937';
  const placeholder   = darkMode ? '#6B7280'                  : '#D1D5DB';

  const [form, setForm] = useState({
    fullName: '', loanType: '', email: '',
    phone: '', loanAmount: '', monthlyIncome: '', address: '',
  });
  const [loading, setLoading] = useState(false);
  const [loanTypeOpen, setLoanTypeOpen] = useState(false);

  type FormField = keyof typeof form;
  const set = (k: FormField, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const selectedLoanTitle = loanTypes.find((loan) => loan.id === form.loanType)?.title ?? 'Select Loan Type';
  const selectLoanType = (value: string) => {
    set('loanType', value);
    setLoanTypeOpen(false);
  };

  const submit = () => {
    if (!form.fullName || !form.loanType || !form.phone) {
      Alert.alert('Missing fields', 'Please fill Full Name, Loan Type, and Phone Number.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('✅ Submitted!', "We'll get back to you shortly!");
      setForm({ fullName: '', loanType: '', email: '', phone: '', loanAmount: '', monthlyIncome: '', address: '' });
    }, 1500);
  };

  const Field = ({ label, field, ph, kb = 'default' }: { label: string; field: FormField; ph: string; kb?: string }) => (
    <View style={{ flex: 1, marginBottom: 18 }}>
      <Text style={[s.label, { color: fieldLabel }]}>{label}</Text>
      <TextInput
        value={(form as any)[field]}
        onChangeText={(v) => set(field, v)}
        placeholder={ph}
        placeholderTextColor={placeholder}
        keyboardType={kb as any}
        autoCapitalize={kb === 'email-address' ? 'none' : 'words'}
        style={[s.input, { backgroundColor: inputBg, borderColor: inputBorder, color: inputText }]}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: pageBg }}>
      <Navbar darkMode={darkMode} onToggleDark={toggleDark} />

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

        {/* blobs — dark mode only */}
        {darkMode && (
          <>
            <View style={{ position: 'absolute', width: 220, height: 220, borderRadius: 110, backgroundColor: 'rgba(83,74,183,0.18)', top: 60, left: -80 }} />
            <View style={{ position: 'absolute', width: 160, height: 160, borderRadius: 80,  backgroundColor: 'rgba(83,74,183,0.18)', top: 200, right: -60 }} />
          </>
        )}

        {/* header */}
        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingTop: 36, paddingBottom: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: '800', color: titleColor, textAlign: 'center', marginBottom: 8 }}>
            Start Your Journey
          </Text>
          <Text style={{ fontSize: 14, color: subtitleColor, textAlign: 'center', lineHeight: 20 }}>
            Fill in your details and we{"'"}ll get back to you shortly
          </Text>
        </View>

        {/* card */}
        <View style={[
          s.card,
          { backgroundColor: cardBg, borderColor: cardBorder },
          darkMode && { shadowColor: '#534AB7', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.18, shadowRadius: 16, elevation: 8 },
        ]}>

          {/* row 1 */}
          <View style={s.row}>
            <Field label="Full Name" field="fullName" ph="Enter your full name" />
            <View style={{ flex: 1, marginBottom: 18 }}>
              <Text style={[s.label, { color: fieldLabel }]}>Loan Type</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setLoanTypeOpen((open) => !open)}
                style={[s.pickerWrap, { backgroundColor: inputBg, borderColor: inputBorder }]}
              >
                <Text style={{ color: form.loanType ? inputText : placeholder, fontSize: 13 }}>
                  {selectedLoanTitle}
                </Text>
              </TouchableOpacity>
              {loanTypeOpen && (
                <View style={[s.dropdown, { backgroundColor: cardBg, borderColor: inputBorder }]}> 
                  {loanTypes.map((loan, index) => (
                    <TouchableOpacity
                      key={loan.id}
                      onPress={() => selectLoanType(loan.id)}
                      activeOpacity={0.8}
                      style={[s.dropdownOption, index === loanTypes.length - 1 && s.lastDropdownOption]}
                    >
                      <Text style={{ color: inputText }}>{loan.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>

          {/* row 2 */}
          <View style={s.row}>
            <Field label="Email Address"  field="email"  ph="your@email.com"    kb="email-address" />
            <Field label="Phone Number"   field="phone"  ph="+91 XXXXX XXXXX"   kb="phone-pad" />
          </View>

          {/* row 3 */}
          <View style={s.row}>
            <Field label="Loan Amount (₹)"    field="loanAmount"    ph="Enter amount"  kb="numeric" />
            <Field label="Monthly Income (₹)" field="monthlyIncome" ph="Enter income"  kb="numeric" />
          </View>

          {/* address */}
          <View style={{ marginBottom: 18 }}>
            <Text style={[s.label, { color: fieldLabel }]}>Complete Address</Text>
            <TextInput
              value={form.address}
              onChangeText={(v) => set('address', v)}
              placeholder="Enter your complete address"
              placeholderTextColor={placeholder}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              style={[s.input, { backgroundColor: inputBg, borderColor: inputBorder, color: inputText, height: 96, paddingTop: 12 }]}
            />
          </View>

          {/* submit */}
          <TouchableOpacity onPress={submit} disabled={loading} activeOpacity={0.85}
            style={[s.submitSolid, { opacity: loading ? 0.8 : 1 }]}> 
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={s.submitText}>✅  Submit Application</Text>}
          </TouchableOpacity>
        </View>

        {/* disclaimer */}
        <Text style={{ fontSize: 11, color: subtitleColor, textAlign: 'center', paddingHorizontal: 32, paddingVertical: 16, lineHeight: 18 }}>
          By submitting you agree to our Terms & Conditions.{'\n'}Your information is safe and will not be shared.
        </Text>

      
      </ScrollView>

      <FloatingButtons />
    </View>
  );
}

const s = StyleSheet.create({
  card:        { marginHorizontal: 16, marginBottom: 8, borderRadius: 20, borderWidth: 1, padding: 20 },
  row:         { flexDirection: 'row', gap: 12 },
  label:       { fontSize: 12, fontWeight: '600', marginBottom: 6, letterSpacing: 0.1 },
  input:       { borderWidth: 1, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 13, height: 48 },
  pickerWrap:  { borderWidth: 1, borderRadius: 10, overflow: 'hidden', height: 48, justifyContent: 'center' },
  gradientWrap:{ borderRadius: 14, marginTop: 4, overflow: 'hidden' },
  submitInner: { paddingVertical: 17, alignItems: 'center', justifyContent: 'center' },
  submitSolid: { backgroundColor: '#534AB7', borderRadius: 14, paddingVertical: 17, alignItems: 'center', marginTop: 4 },
  submitText:  { color: '#FFFFFF', fontWeight: '700', fontSize: 15, letterSpacing: 0.3 },
  dropdown: { borderWidth: 1, borderRadius: 10, marginTop: 8, overflow: 'hidden' },
  dropdownOption: { paddingHorizontal: 14, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  lastDropdownOption: { borderBottomWidth: 0 },
});