import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const ProductList = () => {
  const item2 = { ...localStorage };

  console.log(Object.values(item2));

  //   for (let i of Object.keys(item2)) {
  //     console.log(i.split(',')[0].slice(17, i.split(',')[0].length - 1));
  //     console.log(i.split(',')[2].slice(12, i.split(',')[1].length));
  //     console.log(i.split(',')[3].slice(7, i.split(',')[3].length - 2));
  //     console.log(item2[i]);
  //   }
  const deleteProduct = (a) => {
    localStorage.removeItem(a);
    window.location.reload();
  };
  return (
    <>
      <div style={{ marginLeft: '1rem' }}>
        <Typography variant="h5">REGISTERED PRODUCTS</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Product Title</TableCell>
                <TableCell align="left">Product Quantity</TableCell>
                <TableCell align="left">Product Price</TableCell>
                <TableCell align="left">Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(item2)?.map((i, index) => (
                <TableRow key={i}>
                  <TableCell>
                    <img
                      style={{ width: '6rem' }}
                      src={item2[i]
                        .split(',')[3]
                        .slice(7, item2[i].split(',')[3].length - 2)}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>
                    {item2[i]
                      .split(',')[0]
                      .slice(17, item2[i].split(',')[0].length - 1)}
                  </TableCell>
                  <TableCell>
                    {item2[i]
                      .split(',')[2]
                      .slice(12, item2[i].split(',')[1].length)}
                  </TableCell>
                  <TableCell>
                    {item2[i]
                      .split(',')[1]
                      .slice(9, item2[i].split(',')[1].length - 1)}
                  </TableCell>
                  <TableCell>
                    <div
                      className="btn text-danger"
                      onClick={() => deleteProduct(i)}
                    >
                      <i className="fas fa-trash-alt" />
                    </div>
                    {/* <Button
                      sx={{
                        height: '3rem',
                      }}
                      variant="contained"
                      color="error"
                      onClick={() => deleteProduct(i)}
                    ></Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ProductList;
