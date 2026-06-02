import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { contactInfo, socialLinks } from '../constants/data';

export default function FloatingButtons() {
  return (
    <View style={{ position: 'absolute', bottom: 90, right: 16, gap: 12 }}>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactInfo.office}`)}
        style={{ width: 48, height: 48, backgroundColor: '#10B981', borderRadius: 24, alignItems: 'center', justifyContent: 'center', elevation: 4 }}>
        <Text style={{ fontSize: 20 }}>📞</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contactInfo.email}`)}
        style={{ width: 48, height: 48, backgroundColor: '#EF4444', borderRadius: 24, alignItems: 'center', justifyContent: 'center', elevation: 4 }}>
        <Text style={{ fontSize: 20 }}>✉️</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.whatsapp)}
        style={{ width: 48, height: 48, backgroundColor: '#16A34A', borderRadius: 24, alignItems: 'center', justifyContent: 'center', elevation: 4 }}>
        <Text style={{ fontSize: 20 }}>💬</Text>
      </TouchableOpacity>
    </View>
  );
}