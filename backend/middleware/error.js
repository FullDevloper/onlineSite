const errorHandler = (err, req, res, next) => {
    // console.log(err.stack.cyan.underline);
  
    const error = { ...err };
  
    error.message = err.message;
  
    if (error.name === "Cast to ObjectId failed for value") {
      error.message = "Энэ ID буруу бүтэцтэй ID байна!";
      error.statusCode = 400;
    }
  
    // jwt malformed
    if(error.name === "ValidatorError")
    {
        error.message = "Талбарын утга хоосон байна",
        error.status =401
    }
if(error.message === "Cannot read properties of undefined")
{
  error.message = "Та логин хийж байж энэ үйлдлийг хийх боломжтой...";
  error.statusCode = 401;
}
if (error.message === "jwt malformed") {
    error.message = "Та логин хийж байж энэ үйлдлийг хийх боломжтой...";
    error.statusCode = 401;
}
if( error.name ===  "JsonWebTokenError")
{
      error.message="Таны токен гэмтсэн байна ."
}
  
    if (error.name === "JsonWebTokenError" && error.message === "invalid token") {
      error.message = "Буруу токен дамжуулсан байна!";
      error.statusCode = 400;
    }
  
    if (error.code === 11000) {
      error.message = "Энэ талбарын утгыг давхардуулж өгч болохгүй!";
      error.statusCode = 400;
    }
  
    res.status(err.statusCode || 500).json({
      success: false,
      error,
      code:23
    });
  };
  
  module.exports = errorHandler;