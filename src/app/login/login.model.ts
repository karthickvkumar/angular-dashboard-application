// export interface LoginModel {
//    email : string;
//    password : string;
// };

// export namespace Model {
//     export interface SignIn {
// 		   email : string;
// 		   password : string;
// 		}

//     export interface Validation {
//         emailError : boolean;
//         passwordError : boolean;
//     }

//     export interface Employee {
//         name : string;
//         designation : string;
//         email : string;
//     }
// }
// interface addressType {
//     area: string;
//     state: string;
// }

export namespace Model {
    interface addressModel {
        flatNo: number;
        area: string
    }

    export interface Client {
        email: string;
        password: string;
        // address: addressModel
    }

    export interface Admin {
        adminemail: string;
        adminpassword: string;
        address: addressModel
    }
}