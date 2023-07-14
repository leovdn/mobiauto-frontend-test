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
      outline: 'blue',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '&:before': {
      borderBottom: 0,
      display: 'none',
    },
    '&:after': {
      borderBottom: 0,
    },
  },
  '& .MuiFilledInput-root.Mui-disabled': {
    outline: 'none',
    backgroundColor: 'transparent',
  },
  '& label': {
    color: `${theme.palette.grey[500]}`,
  },
}))
