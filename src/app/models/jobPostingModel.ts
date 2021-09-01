export interface JobPostingModel{
    id:number
    companyId:number,
    companyName:string,
    position:string,
    language:string;
    jobDetail:string,
    experience:string
    startingDate:Date,
    endDate:Date,
    status:boolean
}