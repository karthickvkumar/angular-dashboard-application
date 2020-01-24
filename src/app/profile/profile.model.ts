export namespace Model {

  interface Skills{
    skillName : string;
    expYears : number;
  }
  export interface Users {
	   name : string;
	   designation : string;
     email : string;
     skills : Skills[];
	}
}