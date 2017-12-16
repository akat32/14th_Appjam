# Team : 박법학박사와 백법학박사
2017 14th Appjam Backend

## API Document

* POST /auth/signup : User register

> Params

    name : User's ID [String]

    phone_number : User's Phone_number [String]

    student_number : Users student_number(학번) [String]

    email : User's Email [String]

> Response

    HTTP 200 : User's token

    HTTP 412 : User duplicate


* GET /auth/auto/:token : User auto Login

> Params

    token : User's token [String]

> Response

    HTTP 200 : User's json

    HTTP 401 : {message : "Login Fail!"}

    HTTP 404 : {message : "User Not Found!"}
