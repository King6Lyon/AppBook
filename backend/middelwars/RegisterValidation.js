import  {body,validationResult} from 'express-validator';
const registerValidation=[
    body('email','please enter a valid email').isEmail(),
    body('password','please psword must contain 8 car').isLength({min:8})
]

const logvalidation=[
    body('email','please enter a valid email').isEmail()
]



const validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

export { validation,logvalidation,registerValidation };
