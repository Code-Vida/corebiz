import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

const Img = styled('img')({
    margin: 'auto',
    display: 'block', 
    maxWidth: '100%',
    maxHeight: '100%',
});
export const CheckoutDialog = (prop) => {
    const [props, setProps] = useState(prop)

    const [amount, setAmount] = useState(1)

    useEffect(() => {
        setProps(prop);
    }, [prop]);
    const handleRemoveItem = (e) => {
        const position = e.target.getAttribute("name")
        props.remove(position)
    };
    return (
        <>
            <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth='xl' >
                <DialogTitle>Sua Sacola</DialogTitle>
                <DialogContent>

                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Box sx={{ width: '70%', height: 'auto', backgroundColor: '#ebebeb', margin: 'auto', marginTop: 5, marginBottom: 15, padding: 10, borderStyle: 'outset' }}>

                            {props.product.length > 0 ? props.product.map((row, i) => (
                                <Box sx={{ display: 'flex', marginTop: 5, padding: 6, marginBottom: 10, borderStyle: 'outset' }} key={i}>
                                    <Box sx={{ width: 200, height: 200 }}>
                                        <Paper >
                                            <Img alt="complex" src={row.urlImage} />
                                        </Paper>
                                    </Box>
                                    <Box sx={{ flex: 1, marginLeft: '3%' }}>
                                        <Box >
                                            <Box >
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    Nome {row.nome}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    
                                                    Descrição {row.descricao}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Código: {row.id}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Button
                                            variant="outlined"
                                            name={i}
                                            value={i}
                                            style={{ padding: 10, float: 'right', paddingBottom: 15 }}
                                            onClick={handleRemoveItem}
                                        >remover
                                        </Button>
                                        <Box sx={{ float: 'right', marginRight: 5 }}>
                                            <Typography variant="subtitle1" component="div" sx={{ fontSize: 30, fontWeight: 900, color: 'green' }}>
                                                ${row.valor * amount}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ float: 'right', marginRight: 5 }}>
                                            <TextField
                                                onChange={event => {
                                                    setAmount(event.target.value)
                                                }}
                                                value={amount}
                                                name='quantidade'
                                                type="number"
                                                inputProps={{ style: { width: 30, height: 5, marginTop: 5 } }}
                                                id="filled-basic"
                                                variant="outlined"
                                                label="Quantidade"
                                                InputLabelProps={{
                                                    shrink: true
                                                }} />
                                        </Box>
                                    </Box>
                                </Box>
                            )) : (
                                <>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        Ah que pena, sua sacola ainda esta vazia, continue procurando seu produto :)
                                    </Typography>
                                </>
                            )}
                            <Link
                                style={{ padding: 10, float: 'right' }}
                                component="button"
                                variant="body2"
                                onClick={props.onClose}
                            >
                                continuar comprando
                            </Link>
                        </Box>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={props.onClose}>Fechar</Button>

                    <Button>Finalizar compra</Button>

                </DialogActions>
            </Dialog>
        </>
    )
}
