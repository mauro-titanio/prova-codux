import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
export interface CustomButtonProps extends ButtonProps { }
export function CustomButton(props: CustomButtonProps) {
    console.log(props);
    return <Button {...props} color="primary" variant="contained"  />;
}
