import { Text as RNText, StyleSheet } from 'react-native';
import { TextPresets as presets } from './textPresets';
import React from 'react'

const Text = ({ preset = "base", style, children }) => {
  const presetStyle = StyleSheet.compose(presets[preset], style)
  return (
    <RNText style={presetStyle}>{children}</RNText>
  )
}

export default Text