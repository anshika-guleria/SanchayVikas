import { usePathname, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { navTabs } from '../constants/data';

type Props = { darkMode: boolean; onToggleDark: () => void };

export default function Navbar({ darkMode, onToggleDark }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const bg = darkMode ? '#1A1A3E' : '#FFFFFF';
  const border = darkMode ? '#2d2d6e' : '#E5E7EB';
  const textColor = darkMode ? '#FFFFFF' : '#534AB7';

  const go = (href: string) => { setOpen(false); router.push(href as any); };

  const PANEL_WIDTH = 280;
  const translateX = useRef(new Animated.Value(-PANEL_WIDTH)).current;
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMenuVisible(true);
      Animated.timing(translateX, { toValue: 0, duration: 240, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
    } else {
      Animated.timing(translateX, { toValue: -PANEL_WIDTH, duration: 220, easing: Easing.in(Easing.cubic), useNativeDriver: true }).start(() => setMenuVisible(false));
    }
  }, [open, translateX]);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: bg, borderBottomWidth: 1, borderBottomColor: border }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <TouchableOpacity onPress={() => setOpen((s) => !s)} style={{ padding: 6, marginRight: 6 }}>
              <Text style={{ fontSize: 22, color: textColor }}>☰</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => go('/')} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#534AB7', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>S</Text>
              </View>
              <View>
                <Text style={{ fontSize: 12, fontWeight: '700', color: textColor }}>Sanchay Vikas</Text>
                <Text style={{ fontSize: 10, color: '#9CA3AF' }}>Financial Solutions Ltd.</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity onPress={onToggleDark}
              style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: '#534AB7', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16 }}>{darkMode ? '☀️' : '🌙'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {menuVisible && (
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: 9999 }} pointerEvents={open ? 'auto' : 'none'}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} activeOpacity={1} onPress={() => setOpen(false)} />
          <Animated.View style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: PANEL_WIDTH, backgroundColor: bg, paddingTop: 56, transform: [{ translateX }], zIndex: 10000, elevation: 12 }}>
            <TouchableOpacity style={{ position: 'absolute', top: 16, right: 16 }} onPress={() => setOpen(false)}>
              <Text style={{ fontSize: 22, color: textColor }}>✕</Text>
            </TouchableOpacity>
            <FlatList
              data={navTabs}
              keyExtractor={(i) => i.href}
              renderItem={({ item }) => {
                const active = path === item.href || (item.href === '/' && path === '/index');
                return (
                  <TouchableOpacity onPress={() => go(item.href)}
                    style={{ paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: border, backgroundColor: active ? 'rgba(83,74,183,0.1)' : 'transparent' }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: active ? '#534AB7' : textColor }}>
                      {item.icon}  {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>
        </View>
      )}
    </>
  );
}