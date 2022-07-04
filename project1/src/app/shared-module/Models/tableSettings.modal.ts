export class TableSettings{
    tableClass:string = '';
    tableHead:string = '';
    tableHeadTrClass:string  = '';
    tableHeadTdClass:string = '';
    tableBodyTdClass:string = 'tableData';
    tableBodyTrClass:string = ''
    tableBody:string = '';
    enableActions=false;
    buttons:ButtonSettings[]=[];
    isIconEnabled?:boolean=false; 
   

}

export class ButtonSettings{
    name?:string='';
    class?:string='';
    iconClass?:string=''
    func=(arg: any)=>{}
}