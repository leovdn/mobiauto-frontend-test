import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

export const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'transparent',
    border: '1px solid',
    outline: 'none',
    borderColor: theme.palette.grey[300],
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    '& input': {
      color: `${theme.palette.grey[800]}`,
    },

    '&:hover': {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  '& .MuiFilledInput-root:disabled': {
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .mui-style-i16y9h-MuiInputBase-root-MuiFilledInput-root:before': {
    borderBottom: 0,
    display: 'none',
  },
  '& .mui-style-i16y9h-MuiInputBase-root-MuiFilledInput-root:after': {
    borderBottom: 0,
  },
  '& .mui-style-i16y9h-MuiInputBase-root-MuiFilledInput-root:hover': {
    outline: 'blue',
  },
  '& .mui-style-i16y9h-MuiInputBase-root-MuiFilledInput-root.Mui-disabled': {
    outline: 'none',
    backgroundColor: 'transparent',
  },
  '& label': {
    color: `${theme.palette.grey[500]}`,
  },
}))
