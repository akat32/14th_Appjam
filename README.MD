# Team : 박법학박사와 백법학박사
2017 14th Appjam Backend

## API Document

* POST /auth/signup : User register

> Params

    name : User's ID [String]

    phone_number : User's Phone_number [String]

    student_number : Users student_number(학번) [Number]

    code : School's token [String]

    email : User's Email [String]

> Response

    HTTP 200 : User's token

    HTTP 412 : User duplicate


* GET /auth/auto/:token : User auto Login

> Params

    token : User's token [String]

> Response

    HTTP 200 : User's json

    HTTP 404 : {message : "User Not Found!"}


* POST /upload : User's profile image

> params

    file : User's image

> Response

    HTTP 200 : File's name;

    HTTP 500 : {message : "upload fail!"}
