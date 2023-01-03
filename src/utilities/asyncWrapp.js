
export function asyncWrapp(fn){
    return (req,res,next) => fn(req,res)
    .catch(next)
}