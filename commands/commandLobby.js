// import balanceCommand from './balance.js';
// import registerCommand from './register.js'; 
// import sortFlag from '../flags/sortFlag.js';
// import fileFlag from '../flags/fileFlag.js';
// import priceDbFlag from '../flags/pricedbFlag.js';
import printCommand from './print.js';
import readAll from '../tools/readAll.js';
import errorMsg from '../tools/errorMsg.js';

function fileCommand(arg) {
  let argumentos = process.argv.slice(2);
  // console.log('fileCommand, it works!');
  //console.log(argo);//console.log(comando);
  //console.log(argumentos);

  let fileContent = readAll(argumentos[1]);
  //console.log(readLedgerFile(argumentos[1]));
  //whichflag
  if(argumentos[0] == '--file' || argumentos[0] == '-f'){
      if(argumentos[2] == 'print'){
        printCommand(fileContent);
      } else if(argumentos[2] == 'balance'){
        printCommand(fileContent);
      } else if(argumentos[2] == 'register'){
        printCommand(Content);
      } else {
        errorMsg();
      }
      //deleteTempFile(filing);
  } /* else if(argumentos[0] == '--sort' || argumentos[0] == '-s'){
    let sorting = sortFlag(argo.sort);
      if(argumentos[2] == 'print'){
        printCommand(sorting);
      } else if(argumentos[2] == 'balance'){
        printCommand(balanceCommand(sorting));
      } else if(argumentos[2] == 'register'){
        printCommand(registerCommand(sorting));
      }
      //deleteTempFile(sorting);
  } else if(argumentos[0] == '--price-db'){
      //priceDbFlag(argo.pricedb);
      console.log("Pricedb");
  } else{
      console.log(msgError);
      return;
  } */
}

export default fileCommand;

  /* argumentos.map((value)=> {
    if(value == 'print')
      {
        printCommand(argo.file);
    }else if(value == 'balance'){
        balanceCommand(argo.file);
    } 
  })/*

    //console.log(argumento);
    //argumento.indexOf([1].toString();
    //console.log(JSON.stringify(argumento, null, 4));
    //Object.keys(argumento).forEach((prop)=> console.log(prop));
    //console.log(argumento);
    /* let argo = process.argv.slice(2);
    argo.map((value)=>{
      console.log(value);
    }) */