const yup = require('yup')

exports.urlSchema = yup.object().shape({
    accessUrl: yup.string().required('The access of url is required'),
    description: yup.string().required('The description is required'),
    accessValidity: yup.string().required('The date is required'),
}).required('The form cannot be empty')