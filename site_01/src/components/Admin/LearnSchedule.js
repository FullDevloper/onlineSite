import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import FileBase64 from "react-file-base64"
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
  Input,
  Tooltip,
  Select,
  
} from '@mui/material';
import axios from "../../axios"
import {  } from 'material-react-table/locales/da.esm';
import { Delete, Edit } from '@mui/icons-material';
const LearnChedule = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [teach,setTeach]=useState([]);
    const [ok,setOk]=useState(false);
    // const [horongo,setHorongo]=useState([]);
    const [olgolt,setOlgolt]=useState([]);
    const [learns,setLearns]=useState([]);
    // const userDetail=localStorage.getItem("userDetails")
    const [tableData, setTableData] = useState(() => learns);

    const [validationErrors, setValidationErrors] = useState({});
    useEffect(()=>{
        axios.get("learn/learntanhim").then((res)=>{
          setOlgolt(res.data.data);
      console.log(res.data.data,"dd")
        })
        .catch(err=>{
          console.log(err);
        })
      },[ok])
      useEffect(()=>{
        axios.get("learn/learntanhim").then((res)=>{
            console.log(res.data.data,"learns")
            setLearns(res.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
        axios.get("auth/teacher").then((res)=>{

            setTeach(res.data.data)
            console.log(res.data.data,"ddss")
        }).catch(err=>{
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
    //   useEffect(()=>{
    //     axios.get("category/")
    //   },[ok])
        const handleCreateNewRow = (values) => {
          // console.log(values.Cat.split("--")[0],"ss")

          let lId=[]
          // let teachId=[]
          lId=values.Cat.split("--")
         
       
        //  name= values.HorongoNer.split("--")
        //  console.log(name[1]);
        // LearnName:"",LearnTeacher:"",Cat:"",date:"",desc:"",image:""
          axios.post("schedule/newSchedule",{
           
            learnId:values.Cat,
            TeachId:values.teachId,
            stId:"646e7c882d944516c2cb1415",
            Garig:values.garig,
       
            Start:values.start,
            End:values.end,
          
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
                accessorKey: 'LearnName',
                header: 'Хичээлийн нэр',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                  ...getCommonEditTextFieldProps(cell),
                }),
              },
              {
                accessorKey: 'LearnTeacher',
                header: 'Багшийн нэр',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                  ...getCommonEditTextFieldProps(cell),
                }),
              },
              {
                accessorKey: 'Category',
                header: 'Категори дугаар',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                  ...getCommonEditTextFieldProps(cell),
                }),
              },
            
              {
                accessorKey: 'LearnOgnoo',
                header: 'Огноо',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                  ...getCommonEditTextFieldProps(cell),
                }),
              },
              {
                accessorKey: 'LearnDescription',
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
      data={learns}
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
       Хичээлийн хуваарь нэмэх
      </Button>

        </>
       
      )}
    />
    <CreateNewAccountModal
      columns={createOlgolt}
      category={olgolt}
      open={createModalOpen}
      teach={teach}
      onClose={() => setCreateModalOpen(false)}
      onSubmit={handleCreateNewRow}
    />
  </>
  )
}
export const CreateNewAccountModal = ({ open, onClose, onSubmit,category,teach }) => {
    const initialState={garig:"",LearnTeacher:"",Cat:"",teachId:"",start:"",end:""}
     const [values, setValues] = useState(initialState)
    //  const [split,setSplit]=useState("");
    //  console.log(values.Cat)

    //  console.log("ss",split);
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
         <DialogTitle textAlign="center">Шинэ хичээлийн хуваарь  нэмэх</DialogTitle>
         <DialogContent>
           <form onSubmit={(e) => e.preventDefault()}>
   
        
             <Stack
               sx={{
                 width: '100%',
                 minWidth: { xs: '300px', sm: '360px', md: '400px' },
                 gap: '1.5rem',
               }}
             >      
               <Select
      
             name="Cat"
              value={values.Cat}
              label="Хичээлийн нэр"
              onChange={handleChange}
              
            >
            {
                category &&  category.map((category)=>(
                  <MenuItem value={`${category._id}`}>
                  {`${category.LearnName}`}
                  </MenuItem>
              ))
            }
            </Select>
               <Select
      
             name="teachId"
              value={values.teachId}
              label="Багшийн нэр"
              onChange={handleChange}
              
            >
            {
            teach &&  teach.map((category)=>(
                  <MenuItem value={`${category._id}`}>
                  {`${category.Firstname} ${category.LastName}`}
                  </MenuItem>
              ))
            }
            </Select>
        
               
         
         
       
                 
              <TextField  type="text"   name="garig"
              value={values.garig}
              label="Орох гариг"
              onChange={handleChange}/>
              <TextField  type="text"   name="start"
              value={values.start}
              label="Хичээл орох цаг"
              onChange={handleChange}/>
              <TextField  type="text"   name="end"
              value={values.end}
              label="Хичээл дуусах цаг"
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
export default LearnChedule
