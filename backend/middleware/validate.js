const MyError = require("../utils/MyError")

 exports.validation=(req)=>{
  const useCode= req.userCode;
  console.log(useCode)

    if(useCode.length <=6)
    {
        throw new MyError(`Уучлаарай хэрэглэгчийн нэвтрэх нэрийн урт 6 аас их байх ёстой. Таны оруулсан нь: ${useCode.length} байна.` )
    }
    else if(req.password.length <=6)
    {
        throw new MyError(`Уучлаарай хэрэглэгчийн нууц үг 6 аас их байх ёстой. Таны оруулсан нь: ${req.password.length}`)
    }


   
}
