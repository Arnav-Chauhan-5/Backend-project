// we can use try catch or promise to make a function 

// try catch 
// const asyncHandler = (fun) => async(req,res,next) => {
//     try{
//         return await fun(req,res,next)
//     }
//     catch(error){
        //  we can also standarized this code below as this will also be used in many other codes as we have to provide error codes in
        // request and response so we will define another files in utlis for this (ApiError.js) and (ApiResponse.js) 
//         res.status(error.code||500).json({
//             success : false,
//             message : err.message
//         })
//     }
// }


// promise
const asyncHandler = (requestHandler) => {
    return (req,res,next) =>{
        // we return promise to handle the resolve or reject 
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}
