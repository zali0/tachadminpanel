import { DripsyProvider, makeTheme } from 'dripsy'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create

  colors: {
    $primary: '#EB1135',
    $secondary: '#25251C',
    $white: '#ffffff',
    $black: '#000000',
    $grey: '#646464',
    $darkSecondary: '#0F0F0C',
    // $xs: 90,
  },
  space: {
    $none: 0,
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
    $8: 512,
  },
  types: {
    onlyAllowThemeValues: 'always',
    reactNativeTypesOnly: true,
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
