  //send data
        formElem.onsubmit = async e =>{
            e.prevemtDefault();
            const data = {
                id:formId.value,
                name:formName.value
            };
       const Response = await axios.post('http://localhost:3000/user', data);
       alert(Response.data.message);
        };
        //receive data
        async function fetchUsers(){
            try{
               const Response = await axios.get('http://localhost:3000/user');
               console.log(Response.data);
            }
            catch(e){
                console.log('Error',e);
            }
        }
        fetchUsers();