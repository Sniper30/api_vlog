
export function asyncWrapp(fn){
    return (req,res,next) => fn(req,res)
    .catch((err)=>{
        console.log("error capturado")
        next(err)
    })
}