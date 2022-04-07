import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect, useReducer } from 'react';
import api from '../../Service/api';
import { CheckoutDialog } from '../Checkout/index'
import Fab from '@mui/material/Fab';
import { reducer } from '../../hooks/reducerFunctions'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 10,
        top: 12,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function Home() {

    const [cart, setCart] = useState(0)
    const [product, setProduct] = useState([])
    const [state, dispatch] = useReducer(reducer, []);
    const [checkoutDialog, setCheckoutDialog] = useState(false)

    const handleCloseDialogCheckout = () => {
        setCheckoutDialog(false);
    };
    const handleRemoveItem = (i) => {
        setCart(cart - 1)
        dispatch({ type: "remove", data: i })
    };
    useEffect(() => {

        getProducts()
    }, []);

    const getProducts = async () => {
        await api.get(`product`).then(res => {
            setProduct(res.data.content)
        })
    }

    return (
        <>
            <Box ssx={{ width: '100%', height: '100%', bgcolor: '#ebebeb' }}>
                <Box sx={{ bgcolor: '#ebebeb', height: '150px' }}>
                </Box>
            </Box>
            <Box sx={{ width: '100%', marginTop: 4 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: 6 }}>


                    {product.length > 0 ? product.map((row, i) => (
                        <Grid item xs={4} sx={{ marginTop: 4, marginBottom: 6 }}>
                            <Item>

                                <Grid container spacing={2} sx={{ height: 450 }}>
                                    <Grid item>
                                        <ButtonBase sx={{ width: 120, height: 150 }}>
                                            <Img alt="complex" src={row.urlImage} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontSize: 20, fontWeight: 900 }}>
                                                    Nome {row.nome}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Descrição {row.descricao}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Código: {row.id}
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography variant="subtitle1" component="div" sx={{ fontSize: 40, fontWeight: 900, color: 'green' }} >
                                                    ${row.valor}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ cursor: 'pointer' }} variant="body2" >
                                                    <IconButton
                                                        color="inherit"
                                                        aria-label="open drawer"
                                                        onClick={() => {
                                                            const result = state.find(prod => prod.id === row.id)

                                                            if (typeof result === 'undefined') {
                                                                setCart(cart + 1)
                                                                dispatch({ type: "add", data: row })
                                                            }
                                                        }
                                                        }
                                                        edge="start"
                                                    >
                                                        <AddShoppingCartIcon sx={{ fontSize: 50 }} />
                                                    </IconButton>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                    )) : null}
                </Grid>
            </Box>

            <Fab color="extended" aria-label="add" sx={{
                float: 'right',
                margin: 0,
                top: 'auto',
                right: 40,
                bottom: 40,
                left: 'auto',
                position: 'fixed'
            }}>
                <IconButton aria-label="cart" onClick={() => { setCheckoutDialog(true) }}>
                    <StyledBadge badgeContent={cart} color="secondary"
                        sx={{ marginTop: 5, float: 'right', textAlign: 'right' }}
                    >
                        <ShoppingBagIcon
                            fontSize='large'
                            sx={{ fontSize: 50, marginBottom: 6 }}
                        />
                    </StyledBadge>
                </IconButton>
            </Fab>
            {checkoutDialog ? (
                <CheckoutDialog
                    open={checkoutDialog}
                    product={state}
                    remove={handleRemoveItem}
                    onClose={handleCloseDialogCheckout}
                />
            ) : null}
        </>
    )
}

export default Home