import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,

  Stack,
  TextField,
  Tooltip,
  Select,
  
} from '@mui/material';
import axios from "../../axios"
import {  } from 'material-react-table/locales/da.esm';
import { Delete, Edit } from '@mui/icons-material';
const Admin = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [learn,setLearn]=useState([]);
    const [ok,setOk]=useState(false);
    const [horongo,setHorongo]=useState([]);
    const [olgolt,setOlgolt]=useState([]);
    const userDetail=localStorage.getItem("userDetails")
    const [tableData, setTableData] = useState(() => olgolt);

    const [validationErrors, setValidationErrors] = useState({});
    useEffect(()=>{
        axios.get("category/categories").then((res)=>{
          setOlgolt(res.data.data);
      console.log(res.data.data)
        })
        .catch(err=>{
          console.log(err);
        })
      },[ok])
    const createOlgolt = useMemo(
        () => [
          
          {
            accessorKey: 'AjiltanCode',
            header: 'Ажилтны код',
            size: 140,
            // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //   ...getCommonEditTextFieldProps(cell),
            // }),
          },
          
          {
            accessorKey: 'HorongoNer',
            header: 'Хөрөнгийн нэр',
            size: 140,
            // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //   ...getCommonEditTextFieldProps(cell),
            // }),
          },
          {
            accessorKey: 'NiitToo',
            header: 'Нийт тоо',
            // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            //   ...getCommonEditTextFieldProps(cell),
            //   type: 'email',
            // }),
          },
          {
            accessorKey: 'tolov',
            header: 'Төлөв',
            muiTableBodyCellEditTextFieldProps: {
              select: true, //change to select for a dropdown
            
            },
          },
        ],
       
      );
        const handleCreateNewRow = (values) => {
          console.log(values,"ss")
        //   let name=[]
        //  name= values.HorongoNer.split("--")
        //  console.log(name[1]);
          axios.post("category/newcategory",{
           
            CategryName:values.catName,
            CategoryDesc:values.catDesc
          }).then((res)=>{
            console.log(res.data.data)
            setOk(true)
      
          })
          .catch(err=>{
            console.log(err)
          })
          // horongo.push(values);
          // setHorongo([...tableData]);
        };
      
      
        const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
          if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
            //send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); //required to exit editing mode and close modal
          }
        };
      
        const handleCancelRowEdits = () => {
          setValidationErrors({});
        };
      
        const handleDeleteRow=(row)=>{
          // console.log(row)
         const aa= olgolt.splice(row.index, 1); 
          // console.log(aa[0]._id,"aa");
          axios.delete(`category/ustgah/${aa[0]._id}`).then((res)=>{
            console.log(res.data.message);
            setOk(true)
          })
          .catch(err=>{
            console.log(err);
          })
      
        }
        const getCommonEditTextFieldProps = useCallback(
            (cell) => {
              return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                  const isValid =
                    cell.column.id === 'email'
                      ? validateEmail(event.target.value)
                      : cell.column.id === 'age'
                      ? validateAge(+event.target.value)
                      : validateRequired(event.target.value);
                  if (!isValid) {
                    //set validation error for cell if invalid
                    setValidationErrors({
                      ...validationErrors,
                      [cell.id]: `${cell.column.columnDef.header} is required`,
                    });
                  } else {
                    //remove validation error for cell if valid
                    delete validationErrors[cell.id];
                    setValidationErrors({
                      ...validationErrors,
                    });
                  }
                },
              };
            },
            [validationErrors],
          );
          const columns = useMemo(
            () => [
          
              {
                accessorKey: 'CategryName',
                header: 'Категори нэр',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                  ...getCommonEditTextFieldProps(cell),
                }),
              },
              {
                accessorKey: 'CategoryDesc',
                header: 'Дэлгэрэнгүй',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                  ...getCommonEditTextFieldProps(cell),
                }),
              },
            
        
              
           
        
            ],
            [getCommonEditTextFieldProps],
          );
  return (
    <>
    <MaterialReactTable
      displayColumnDefOptions={{
        'mrt-row-actions': {
          muiTableHeadCellProps: {
            align: 'center',
          },
          size: 120,
        },
      }}
      localization={{
          actions: 'Үйлдэл',
          and: 'e',
          cancel: 'Цуцлах',
          edit:"Засах",
          changeFilterMode: 'Alterar o modo de filtro',
          changeSearchMode: 'Alterar o modo de pesquisa',
          clearFilter: 'Арилгах',
          clearSearch: 'Хайлт устгах',
          clearSort: 'Эрэмблэлт арилгах',
          clickToCopy: 'Clique para copiar',
          filterByColumn:"Хайх",
          sortByColumnAsc:"Дээш эрэмблэх",
          sortedByColumnDesc:"Доороос дээш эрэмблэх",
          sortByColumnDesc:"Доороос дээш эрэмблэх",
          showHideColumns:"Нуух"
      }}
      columns={columns}
      data={olgolt}
      editingMode="modal" //default
      enableColumnOrdering
      enableEditing
      onEditingRowSave={handleSaveRowEdits}
      onEditingRowCancel={handleCancelRowEdits}
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip arrow placement="left" title="Засах">
            <IconButton onClick={() => table.setEditingRow(row)}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Устгах">
            <IconButton color="error" onClick={()=>handleDeleteRow(row)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      renderTopToolbarCustomActions={() => (
        <>

      <Button
        color="secondary"
        onClick={() => setCreateModalOpen(true)}
        variant="contained"
      >
        Категори нэмэх
      </Button>

        </>
       
      )}
    />
    <CreateNewAccountModal
      columns={createOlgolt}
      horongo={horongo}
      open={createModalOpen}
      onClose={() => setCreateModalOpen(false)}
      onSubmit={handleCreateNewRow}
    />
  </>
  )
}
export const CreateNewAccountModal = ({ open, onClose, onSubmit }) => {
    const initialState={catName:"",catDesc:""}
     const [values, setValues] = useState(initialState)
     const handleSubmit = () => {
       //put your validation logic here
       onSubmit(values);
       onClose();
     };
     const handleChange=(e)=>{
    //    const {name,value}=e.target;
       setValues({...values,[e.target.name]:e.target.value});
       return ()=>{
         setValues("")
       }
     }
   
   
   
     return (
       <Dialog open={open}>
         <DialogTitle textAlign="center">Шинэ категори үүсгэх</DialogTitle>
         <DialogContent>
           <form onSubmit={(e) => e.preventDefault()}>
   
        
             <Stack
               sx={{
                 width: '100%',
                 minWidth: { xs: '300px', sm: '360px', md: '400px' },
                 gap: '1.5rem',
               }}
             >
        
               <TextField label="Категори нэр" value={values.catName} name="catName" onChange={handleChange}/>
   
           
         
               
               <TextField     name="catDesc"
               value={values.catDesc}
               label="Категори дэлгэрэнгүй"
               onChange={handleChange}/>
         
          
               
             </Stack>
           </form>
         </DialogContent>
         <DialogActions sx={{ p: '1.25rem' }}>
           <Button onClick={onClose}>Цуцлах</Button>
           <Button color="secondary" onClick={handleSubmit} variant="contained">
       Үүсгэх
           </Button>
         </DialogActions>
       </Dialog>
     );
   };
   
   const validateRequired = (value) => !!value.length;
   const validateEmail = (email) =>
     !!email.length &&
     email
       .toLowerCase()
       .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
       );
   const validateAge = (age) => age >= 18 && age <= 50;
export default Admin
