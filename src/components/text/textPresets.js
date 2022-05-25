import { colors } from "../../theme/colors"

const base = {
  fontSize: 14,
  fontFamily: 'GraphikRegular',
  color: colors.white,
  lineHeight: 24
}

const darkBase = {
  fontFamily: 'GraphikMedium',
}

const heading = {
  fontFamily: 'GraphikSemibold',
  color: colors.white
}

export const TextPresets = {
  'base': base,
  'h1': {
    ...heading,
    fontSize: 24,
    lineHeight: 26
  },
  'h2': {
    ...heading,
    fontSize: 20,
    lineHeight: 22
  },
  'h3': {
    ...heading,
    fontSize: 18,
    lineHeight: 20
  },
  'darkBase': {
    ...darkBase,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center'
  },
  'darkH2': {
    ...darkBase,
    fontSize: 20,
    lineHeight: 22
  },
  'button': {
    fontFamily: 'GraphikMedium',
    fontSize: 18,
    marginLeft: 20,
    color: colors.white
  }
}